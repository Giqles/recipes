---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---

{% include search.html %}

<ul>
  {% for recipe in site.recipes %}
    <li>
      <a href="{{ site.baseurl }}{{ recipe.url }}" class="recipe-link">{{ recipe.title }}</a>
    </li>
  {% endfor %}
</ul>
