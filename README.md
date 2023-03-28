# Recipes

A very simple collection of recipes. 

## Testing changes

To test changes locally, run the following command:

```bash
jekyll serve
```

## Deploying the site

Rather than use the GitHub Pages build process, I've opted to build the site locally and push the static files to the `gh-pages` branch. This is done with the following commands:

```bash
jekyll build
git checkout gh-pages
cp -R _site/* .
git add .
git commit -m "Deploy site"
git push
```
