import json
import os
import logging

'''
--- Sets the path to the static files to be used in the `index.html` template
'''

def load_static_asset_manifest(frontend_build_root):

    manifest_path = os.path.join(frontend_build_root, 'asset-manifest.json')
    
    try:
        with open(manifest_path) as data_file:
            data = json.load(data_file)
            main_css = os.path.relpath(data.get('files').get('main.css'), 'static/')
            main_js = os.path.relpath(data.get('files').get('main.js'), 'static/')
            static_js_key = [value for key, value in data.get('files').items() if 'chunk.js' in key]
            static_js = os.path.relpath(static_js_key[0], 'static/')
            
            return {
                "main_css": main_css,
                "static_js": static_js,
                "main_js": main_js,
            }
    except Exception as e:
        logging.warning(f">>>>> Can't load static asset manifest: {e}")

    return None
