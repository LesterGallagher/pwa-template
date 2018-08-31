


Generate Icons Here: https://realfavicongenerator.net/ (make sure to generate every icon for every platform)


Gnerate CSS Components Theme Here: https://onsen.io/theme-roller/

To edit the existing themes on the theme-roller:
* Open https://onsen.io/theme-roller/
* Under Theme preset -> Customize(on) -> "Bulk Edit"
* Copy the values from assets/css/onsenui/theme.css into the textarea
* Save changes
* Start editing

Default themes can be found in assets/css/onsenui/alternative-themes

Recommaned colors
{{ site.ms_tile_color}}: #9f00a7
{{ site.theme_color }}: #f5593d

With every version increase the sw.js version count (pwa-template-*-cache-v*). THis ensures that the service worker will refresh the cache and serve the newest version. Changing a single letter is actually enough to trigger a refresh. It is important though to change the cache name otherwise the old caches will not be removed. More info on service workers can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers



