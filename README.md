# Recipes

A very simple collection of recipes.

## Setting up on a new machine

Install ruby, bundler, then the gems for this package:
```sh
sudo apt install ruby-full build-essential
sudo gem install bundler
bundle install --local
```

## Testing changes

To test changes locally, run the following command:

```bash
bundle exec jekyll serve
```

## Deploying the site

Rather than use the GitHub Pages build process, I've opted to build the site locally and push the static files to the `gh-pages` branch. This is done with the following commands:

```bash
bundle exec jekyll build
git checkout gh-pages
cp -R _site/* .
git add .
git commit -m "Deploy site"
git push
```
