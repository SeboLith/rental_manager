from django.conf import settings


def static(request):
    if settings.STATIC_ASSET_MANIFEST:
        return {
            'main_css': settings.STATIC_ASSET_MANIFEST.get('main_css'),
            'static_js': settings.STATIC_ASSET_MANIFEST.get('static_js'),
            'main_js': settings.STATIC_ASSET_MANIFEST.get('main_js'),
        }
    return {}