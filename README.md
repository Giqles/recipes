# Recipes
A very simple collection of recipes. To update the site:
```bash
jekyll build
git checkout gh-pages
cp -R _site/* .
git add .
git commit -m "Deploy site"
git push
```
