# AJAXIFY

[ajaxify](https://github.com/erming/ajaxify) is a jQuery plugin which converts your HTTP calls into Ajax requests.

## Usage:

### Javascript

To "ajaxify" an element, simply call this jQuery function:

```javascript
$(".example").ajaxify();
```

### HTML

The markup could then look something like this:

```html
<div id="content"></div>
<a class="example" href="example.html" data-target="#content">Click me</a>
```

As you can see, we've defined the ```data-target``` attribute. Targets are defined using jQuery selectors. This is where the results of the Ajax requests will end up.

Currently supported elements:
- ```<a>``` (click event)
- ```<form>``` (submit event)

## Requirements:

- jQuery version 1.8 or higher
