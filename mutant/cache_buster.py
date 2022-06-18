import hashlib
from pathlib import Path
import re

__HERE__ = Path(__file__).parent

js_files = __HERE__.glob("*.js")
css_files = __HERE__.glob("*.css")
html_files = __HERE__.glob("*.html")


def get_cache_busted_path(match: re.Match, hashes):
    attr = match.group("attr")
    old_value = match.group("value")

    if old_value.startswith("#") or ("://" in old_value):
        return match.group()

    url_parts = old_value.split("?")
    path = url_parts[0]

    if path in hashes:
        new_value = f"{path}?_={hashes[path]}"
        if new_value != old_value:
            print(f"{old_value} -> {new_value}")
        return f'{attr}="{new_value}"'

    return match.group()


HASHES = {}

for path in js_files:
    with path.open("rb") as f:
        HASHES[str(path)] = hashlib.sha1(f.read()).hexdigest()
for path in css_files:
    with path.open("rb") as f:
        HASHES[str(path)] = hashlib.sha1(f.read()).hexdigest()

for html_path in html_files:
    with html_path.open("r", encoding="utf8") as f:
        html = f.read()

    modified_html = re.sub(
        r'(?P<attr>src|href)="(?P<value>.*?)"',
        lambda match: get_cache_busted_path(match, HASHES),
        html,
    )

    with html_path.open("w", encoding="utf8") as f:
        f.write(modified_html)

