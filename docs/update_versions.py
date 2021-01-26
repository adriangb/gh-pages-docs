"""Writes a list like:

    refs/heads/main,latest
    v1.0.0,stable
    v0.9.0,v0.9.0

To a file called versions.txt
"""

import os

base = "refs"
branch_names = {"main": "latest"}
stable = None

dirs = []

if os.path.exists(os.path.join(base, "heads")):
    for branch in os.listdir(os.path.join(base, "heads")):
        if branch not in branch_names:
            continue
        bname = branch_names[branch]
        dirs.append("/".join((base, "heads", branch)) + f",{bname}")
if os.path.exists(os.path.join(base, "tags")):
    tags = []
    for tag in os.listdir(os.path.join(base, "tags")):
        tags.append(tag)
    tags = tags.sort(key=lambda s: map(int, s.strip("v").split('.')))
    for tag in tags[:-1]:
        dirs.append("/".join((base, "tags", tag)) + f",{tag}")
    if len(tags) != 0:
        stable = "/".join((base, "tags", tags[-1]))
        dirs.append(stable + f",stable")

with open("versions.txt", "w") as f:
    f.write("\n".join(dirs))

if stable:
    redirect = stable
else:
    try:
        b = next(k for k, v in branch_names.items() if v )
        redirect = "/".join((base, "heads", b))
    except StopIteration:
        redirect = None
if redirect:
    with open("index.html", "w") as f:
        f.write(f"""<meta http-equiv="refresh" content="0; URL='{redirect}/index.html'" />""")
