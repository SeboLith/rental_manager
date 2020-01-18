from django.conf import settings

'''
--- Sets the path to the frontend static files to be used in the `index.html` template
--- populate the context when a template is rendered with a request. Return a dict of items to be merged into the context.
'''

def static(request):
    if settings.STATIC_ASSET_MANIFEST:
        return {
            'main_css': settings.STATIC_ASSET_MANIFEST.get('main_css'),
            'static_js': settings.STATIC_ASSET_MANIFEST.get('static_js'),
            'main_js': settings.STATIC_ASSET_MANIFEST.get('main_js'),
        }
    return {}