from legislators_pudding import leg
from legislators2 import names

for name in names:
    for rep, bio_id in leg:
        if all(x in rep for x in name.replace("-"," ").split(" ")):
            print(f"{bio_id}")
            break
