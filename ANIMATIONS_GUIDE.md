# 🎭 Animation Reference Guide

## Overview of All Animations Used

This document outlines all animations and transitions used throughout your portfolio.

---

## 📋 Custom CSS Animations

### 1. **blob** (7s infinite)
```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```
**Used for**: Background floating orbs
**Effect**: Creates organic floating motion

---

### 2. **slideDown** (0.5s ease-out)
```css
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Used for**: Text entrance from top
**Effect**: Content slides down while fading in

---

### 3. **fadeIn** (1s ease-out)
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
**Used for**: Profile images, sections
**Effect**: Smooth opacity transition

---

### 4. **slideUp** (0.5s ease-out)
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Used for**: Skill cards, content blocks
**Effect**: Content slides up while appearing

---

### 5. **slideInRight** (0.5s ease-out)
```css
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
```
**Used for**: Right-aligned content
**Effect**: Content slides in from left

---

### 6. **slideInLeft** (0.5s ease-out)
```css
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
```
**Used for**: Left-aligned content
**Effect**: Content slides in from right

---

### 7. **pulse-glow** (2s infinite)
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  50% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
}
```
**Used for**: Highlight elements, badges
**Effect**: Pulsing glow that expands outward

---

### 8. **shimmer** (2s infinite)
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```
**Used for**: Loading states, text effects
**Effect**: Light shimmer across element

---

### 9. **float** (3s ease-in-out)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```
**Used for**: Profile image, badges
**Effect**: Gentle vertical floating motion

---

### 10. **gradient-shift** (3s linear)
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```
**Used for**: Gradient text, backgrounds
**Effect**: Animated gradient color flow

---

### 11. **spin-slow** (3s linear)
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
**Used for**: Loading spinner, icons
**Effect**: Slow continuous rotation

---

## 🎬 Framer Motion Animations

### Container Variants
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,      // Each child 100ms apart
      delayChildren: 0.2,        // Start after 200ms
    },
  },
};
```
**Used for**: List items, card grids
**Effect**: Staggered entrance animation

---

### Item Variants
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
```
**Used for**: Individual cards, content blocks
**Effect**: Fade in + slide up animation

---

### Hover Effects
```javascript
whileHover={{
  y: -8,              // Move up 8px
  scale: 1.05,        // Grow 5%
  boxShadow: "0 20px 25px rgba(...)"
}}
```
**Used for**: Cards, buttons
**Effect**: Elevation and scale on hover

---

### Tap Effects
```javascript
whileTap={{ scale: 0.95 }}
```
**Used for**: Buttons, interactive elements
**Effect**: Shrink slightly on click

---

## 🎨 Animation Delay Classes

```css
.animation-delay-300  { animation-delay: 300ms; }
.animation-delay-500  { animation-delay: 500ms; }
.animation-delay-700  { animation-delay: 700ms; }
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
```

---

## 🔄 Transition Effects

### Smooth Color Transitions
```css
color: transition 0.3s ease;
background-color: transition 0.3s ease;
border-color: transition 0.3s ease;
```

### Smooth Transform Transitions
```css
transform: transition 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Smooth Shadow Transitions
```css
box-shadow: transition 0.3s ease;
```

---

## 📊 Animation Usage by Section

### Navbar
- Logo: `whileHover={{ scale: 1.05 }}`
- Menu items: `staggerChildren` with `slideDown`
- Mobile menu: `whileHover={{ x: 5 }}`

### Hero Section
- Headline: `slideDown` + fade in
- Image: `float` + `whileHover={{ scale: 1.05 }}`
- Badges: `animate={{ y: [0, -10, 0] }}`
- Scroll indicator: `animate={{ y: [0, 10, 0] }}`

### Projects
- Card entrance: `slideUp` with stagger
- Video hover: Image `scale`, overlay `opacity`
- Icons: `whileHover={{ rotate: 180, scale: 1.2 }}`
- Tags: `whileHover={{ scale: 1.08 }}`

### Blog
- Cards: `whileHover={{ y: -8 }}`
- Images: `animate={{ scale: isHovered ? 1.05 : 1 }}`
- Icons: `animate={{ opacity: isHovered ? 1 : 0.5 }}`

### Skills
- Cards: `whileHover={{ y: -8 }}`
- Icons: `whileHover={{ scale: 1.1, rotate: 10 }}`
- Bottom bar: `whileHover={{ width: "100%" }}`

### About
- Slide transitions: `AnimatePresence` with variants
- Navigation: `whileHover={{ scale: 1.2, x: ±5 }}`
- Dots: `whileHover={{ scale: 1.2 }}`

### Contact
- Form inputs: `whileHover={{ y: -2 }}`
- Button: `whileHover={{ scale: 1.02 }}`
- Social icons: `whileHover={{ y: -4 }}`

---

## ⚡ Performance Tips

### GPU-Accelerated Properties
Only animate these for best performance:
- `transform` (translate, scale, rotate)
- `opacity`

### Avoid Animating
These cause repaints:
- `width`, `height`
- `left`, `right`, `top`, `bottom`
- `padding`, `margin`
- `background-color` (use opacity with layers instead)

---

## 🎯 Animation Best Practices Used

1. **Meaningful Animations**
   - Animations serve a purpose
   - Guide user attention
   - Provide feedback

2. **Consistent Timing**
   - Most animations: 0.3s - 0.5s
   - Page transitions: 0.5s - 0.8s
   - Background animations: 3s - 7s

3. **Easing Functions**
   - `ease-out`: For entrance animations
   - `ease-in`: For exit animations
   - `ease-in-out`: For loops
   - `cubic-bezier`: For custom feel

4. **Reduced Motion**
   - Respects `prefers-reduced-motion`
   - Animations disabled for accessibility

5. **No Jank**
   - 60fps target
   - GPU acceleration
   - Optimized Framer Motion

---

## 🔧 Customizing Animations

### Change Animation Speed
```javascript
// Slower animation
transition={{ duration: 1 }}

// Faster animation
transition={{ duration: 0.3 }}
```

### Change Animation Direction
```javascript
// Slide from different direction
initial={{ opacity: 0, x: -20 }}  // From left
initial={{ opacity: 0, x: 20 }}   // From right
initial={{ opacity: 0, y: -20 }}  // From top
initial={{ opacity: 0, y: 20 }}   // From bottom
```

### Disable Animations
```javascript
// In globals.css, uncomment:
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

### Create New Animation
```css
@keyframes myCustom {
  0% { /* start state */ }
  100% { /* end state */ }
}

.animate-myCustom {
  animation: myCustom 2s ease infinite;
}
```

---

## 📱 Mobile Animation Considerations

- Reduced animation complexity on mobile
- Shorter animation durations
- Touch feedback instead of hover
- Stagger delays reduced slightly
- Background animations simplified

---

## 🎓 Animation Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Easing Functions](https://easings.net/)
- [Animation Performance](https://web.dev/animations/)

---

*Animation Guide Version: 1.0*  
*Last Updated: January 2026*
