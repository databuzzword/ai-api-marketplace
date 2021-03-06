from fastapi import Depends, FastAPI

#from .image.image.uncolorization import users 


app = FastAPI()



import importlib
import pkgutil


def import_submodules(package, recursive=True):
    """ Import all submodules of a module, recursively, including subpackages

    :param package: package (name or actual module)
    :type package: str | module
    :rtype: dict[str, types.ModuleType]
    """
    if isinstance(package, str):
        package = importlib.import_module(package)
    results = {}
    for loader, name, is_pkg in pkgutil.walk_packages(package.__path__):
        full_name = package.__name__ + '.' + name
        this_module = importlib.import_module(full_name)
        print(full_name)
        results[full_name] = this_module
        if "router" in dir(this_module):
            app.include_router(this_module.router, prefix=full_name.replace(".", "/").replace("apis",""))
        print()
        if recursive and is_pkg:
            results.update(import_submodules(full_name))
    return results

import apis
import_submodules(apis)


@app.get("/")
async def root():
    return {"message": "Hello !"}

