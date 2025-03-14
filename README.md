# StepSlide 🚀

A React component for step-based scrolling navigation.

## Demo

![Demo GIF](<https://raw.githubusercontent.com/mohammad-gh72/step-slider/refs/heads/main/img/Rec%200009%20(online-video-cutter.com).gif>)

## 📺 Video Tutorial

Here is the video showing how to use this component:  
[![Watch the video](https://img.youtube.com/vi/ZpQ1YGMbhAU/0.jpg)](https://youtu.be/ZpQ1YGMbhAU)

## 📦 Installation

```sh
npm i step-slider
```

## 🔧 Required CSS

To ensure the component works correctly, add the following CSS to your project(main css file):

```css
html {
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Chrome, Safari */
}

body {
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* Hide scrollbar in IE/Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}
```

## Some Explanations

Since each component is internally wrapped inside a `<div>` (through the `Step-Slider` component), you need to select these wrapper `<div>` elements to create more complex layouts. For example, `nth-child(1)` corresponds to `ComponentA`, `nth-child(2)` to `ComponentB`, and so on. Using this technique, you can access each component's wrapper and arrange them as needed.

### Check the image below:

![Layout Example](<https://github.com/mohammad-gh72/step-slider/blob/main/img/Screenshot%20(58).jpg>)

## GitHub Repository

Check out the source code and contribute to the project on GitHub:

[step-slider Repository](https://github.com/mohammad-gh72/step-slider)

# step-slider
