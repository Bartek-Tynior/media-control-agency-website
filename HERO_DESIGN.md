# Developer Brief: Hero-to-Projects Transition and Layout

## Objective

Implement a homepage interaction where the hero section transitions seamlessly into a projects overview. The effect should feel editorial, immersive, and cinematic: the hero acts as an abstract visual gateway, and the projects section is revealed through a scroll-driven transformation rather than a hard page break.

The developer will provide final colors, images, typography details, and project content. This brief focuses on layout behavior, animation logic, transition design, and interaction principles.

---

## Overall Design Direction

The page should feel minimal, sharp, and art-directed. The initial state is spacious and restrained, with a strong contrast between a mostly empty hero canvas and a central abstract visual element. As the user scrolls, the abstract element expands and transforms into a mask/reveal layer, gradually exposing the project grid behind it.

The transition should not feel like a standard fade or section jump. It should feel like the viewer is moving through the hero visual into the project world.

Key qualities:

* Editorial and portfolio-like
* High contrast between negative space and dense project content
* Smooth scroll-driven motion
* Abstract hero form used as a visual transition device
* Project cards arranged in an irregular but balanced grid
* Minimal UI, with navigation kept small and unobtrusive

---

## Page Structure

The homepage should consist of at least two primary sections:

1. **Hero Section**
2. **Projects Section**

These sections should be connected by a scroll-driven transition. The projects section may technically sit behind, below, or underneath the hero depending on the implementation, but visually it should appear as though the project grid is revealed through the hero artwork.

---

## Hero Section Layout

### Canvas

The hero should occupy the full viewport height, preferably `100vh` or slightly more if needed for scroll timing.

The hero should have a large, mostly empty background area. Avoid filling the hero with too many elements. The impact comes from the contrast between the minimal layout and the animated central shape.

Recommended structure:

* Header/logo at top-left
* Navigation at top-right
* Main hero visual centered
* Small supporting text near the lower-left
* Optional small label, index, or CTA near lower-right

### Header

The header should be fixed or visually persistent during the hero transition.

Layout:

* Logo/wordmark in the top-left
* Small navigation links in the top-right
* Navigation should be compact and understated
* Keep header height shallow
* Avoid large menu elements that compete with the central transition

The header can invert or adapt once the projects section becomes dominant, depending on the final color system.

### Hero Visual

The central hero visual should be an abstract layered form, image composition, or mask-like shape. It should sit approximately in the center of the viewport.

Important characteristics:

* It should feel organic or sculptural rather than rectangular.
* It may contain image fragments, gradients, textures, or cut-out shapes.
* It should be large enough to dominate the center but still leave significant empty space around it.
* It should be treated as the main transition object.

This element should not simply fade out. It should scale, expand, and function as the transition bridge into the projects grid.

### Hero Text

Hero text should be compact and placed near the lower-left corner.

Suggested behavior:

* Keep the text small and confident.
* Use short lines rather than paragraph text.
* Text may remain static during the first part of the scroll.
* As the transition begins, the text can fade, clip, or move slightly out of view.

Do not over-animate the text. The hero visual should remain the main motion focus.

---

## Scroll-Driven Transition

### Core Transition Concept

On scroll, the central hero visual should enlarge and move toward the viewer. As it scales up, it should begin to act like a reveal mask for the projects section.

The transition should feel like:

1. User starts on a clean hero.
2. The central abstract shape slowly enlarges.
3. Parts of the projects section become visible through or around the shape.
4. The hero background gives way to a darker or denser project environment.
5. The projects grid settles into place as the main page content.

### Recommended Animation Sequence

#### Phase 1: Resting Hero

Initial state:

* Hero background visible
* Central abstract visual at medium scale
* Header visible
* Supporting text visible
* Projects section hidden or barely visible

No immediate animation should run aggressively on load. Subtle idle movement is acceptable but should be minimal.

#### Phase 2: Scroll Activation

As the user begins scrolling:

* Central visual scales up gradually
* The visual may slightly translate upward or toward one side depending on composition
* Surrounding abstract blobs/shapes can separate subtly or drift
* Hero text begins to fade or move out
* Background starts transitioning toward the projects environment

Motion should be tied to scroll progress, not a fixed timed animation.

#### Phase 3: Mask / Reveal Moment

At the midpoint of the transition:

* The hero visual becomes oversized
* It should partially cover or frame the viewport
* Project thumbnails begin appearing behind it
* The visual can act like a clipping mask, aperture, or wipe
* The viewer should feel as if they are passing through the hero image

This is the most important part of the interaction. Avoid making it feel like a simple crossfade.

Possible implementation approaches:

* Use a large SVG mask that scales with scroll.
* Use CSS `clip-path` with an organic shape if feasible.
* Use layered divs with mix-blend/masking behavior.
* Use a WebGL/canvas-based reveal only if the site already supports that complexity.
* Use GSAP ScrollTrigger, Framer Motion, or native scroll-timeline depending on stack preference.

#### Phase 4: Projects Section Takes Over

As the transition completes:

* Hero visual exits the viewport or becomes fully absorbed into the project layout.
* Projects grid becomes fully visible.
* Background shifts fully into the projects-section treatment.
* Project cards settle into their final grid positions.
* Header remains visible and legible.

The final state should feel stable. Avoid leaving the user in a half-transitioned state after the animation ends.

---

## Projects Section Layout

### General Layout

The projects section should use an irregular editorial grid rather than a standard uniform card grid.

The layout should feel curated, like a visual index or moodboard.

Recommended characteristics:

* Multiple project thumbnails visible at once
* Varying card sizes
* Uneven vertical alignment
* Horizontal and vertical rhythm that feels intentional
* Large negative spaces between some cards
* Text labels attached to or overlaid near project images
* A dark or high-contrast background treatment can be used if appropriate

The final content, colors, and imagery will be supplied separately, so the layout system should be flexible.

### Grid Composition

Use a responsive grid that supports different card spans.

Example desktop behavior:

* 12-column grid or CSS grid with flexible columns
* Some cards span 2–4 columns
* Some cards are taller or wider than others
* Cards should not all align perfectly in rows
* Maintain enough spacing so the layout feels editorial, not cluttered

The design should allow for a mix of:

* Small portrait cards
* Wide landscape cards
* Medium square or rectangular cards
* Text-only project labels or metadata blocks

### Project Cards

Each project card should include:

* Image or video thumbnail
* Project title
* Optional category, year, or short metadata
* Optional hover state

The title can sit:

* Directly below the thumbnail
* Overlaid on the image
* Beside the image
* Aligned to the lower-left edge of the card

The exact treatment can be decided later, but the system should support variation.

### Card Motion on Reveal

When the projects grid appears after the hero transition, cards should animate in subtly.

Recommended animation:

* Slight opacity fade-in
* Small vertical or horizontal offset
* Optional stagger between cards
* Parallax-like difference in movement speed between cards
* Avoid large bouncy animations

The motion should feel smooth and controlled, not playful or exaggerated.

---

## Interaction Details

### Scroll Behavior

The transition should be scroll-driven and responsive to the user’s scroll position.

Recommended behavior:

* Pin the hero section during the transition.
* Use a scroll distance of approximately 150–250vh for the full transition.
* Map scroll progress to scale, opacity, mask size, and project reveal.
* Avoid snapping unless specifically desired.
* Ensure normal scrolling resumes after the projects grid is fully visible.

### Timing and Easing

Even though the transition is scroll-driven, all interpolated values should use smooth easing.

Suggested feel:

* Slow and deliberate at the beginning
* More dramatic expansion in the middle
* Gentle settle at the end

Avoid linear-feeling motion. The scaling should feel cinematic.

### Hover States

Project cards can have subtle hover states, such as:

* Slight image scale
* Text reveal
* Metadata fade-in
* Cursor change
* Soft overlay
* Small movement of label or image

Hover effects should not compete with the main scroll transition.

### Navigation Behavior

The navigation should remain minimal and accessible.

Possible behavior:

* Header stays fixed throughout.
* Header text color or blend mode adapts depending on background.
* Navigation remains clickable during and after transition.
* Avoid hiding navigation for long periods.

---

## Technical Recommendations

### Preferred Implementation Options

The effect can be implemented using one of the following approaches:

#### Option 1: GSAP ScrollTrigger

Best for precise control.

Use GSAP ScrollTrigger to:

* Pin the hero section
* Track scroll progress
* Scale the hero visual
* Animate mask size
* Fade hero text
* Reveal project grid
* Stagger project cards

This is likely the most reliable approach for a complex scroll transition.

#### Option 2: Framer Motion / Motion

Good if the site is already React-based.

Use scroll progress hooks to map scroll position to:

* Scale
* Opacity
* Transform
* Clip-path values
* Blur or overlay intensity

This can work well but may need extra care for advanced masking.

#### Option 3: Native CSS Scroll Animations

Use only if browser-support requirements allow it.

This may be lighter but less flexible for organic mask transitions.

---

## Suggested Layering Model

Use a layered structure similar to:

```text
Page
├── Fixed or sticky header
├── Scroll transition wrapper
│   ├── Hero section
│   │   ├── Hero background
│   │   ├── Hero text
│   │   └── Hero abstract visual / mask object
│   └── Projects reveal layer
│       ├── Projects background
│       └── Project grid
└── Remaining page content
```

Layering behavior:

* Projects layer can sit behind the hero initially.
* Hero visual/mask scales above it.
* As scroll progresses, projects become more visible.
* Final state places projects as the primary visible layer.

Pay close attention to `z-index`, stacking contexts, and pointer events.

---

## Responsive Behavior

### Desktop

Desktop should receive the full transition experience.

* Full viewport hero
* Large central abstract visual
* Pinned scroll transition
* Irregular project grid
* Rich motion and staggered reveal

### Tablet

Keep the same concept but reduce complexity.

* Slightly smaller hero visual
* Fewer visible project cards initially
* Less aggressive scale values
* Ensure navigation remains readable

### Mobile

Mobile should be simplified.

Recommended mobile behavior:

* Preserve the hero-to-project reveal concept, but reduce the scale distance.
* Avoid overly complex masks if performance suffers.
* Use a stacked or masonry-like project layout.
* Reduce animation duration and scroll pinning if it causes usability issues.
* Ensure project cards are easy to tap.
* Keep text readable and avoid tiny navigation links.

A fallback mobile experience is acceptable as long as it preserves the same visual idea.

---

## Performance Requirements

The transition relies heavily on motion and images, so performance must be prioritized.

Recommendations:

* Use optimized responsive images.
* Use lazy loading for project thumbnails below the fold.
* Use transform and opacity animations where possible.
* Avoid animating layout-heavy properties.
* Avoid animating large filters unless tested.
* Use video thumbnails only when necessary.
* Respect `prefers-reduced-motion`.
* Test on mid-range mobile devices.

For users with reduced motion enabled:

* Disable the pinned cinematic transition.
* Replace it with a simple fade/scale reveal.
* Keep all content accessible.

---

## Accessibility Requirements

The visual effect should not interfere with usability.

Requirements:

* All project cards must be keyboard accessible.
* Navigation must remain keyboard accessible.
* Focus states must be visible.
* Text should remain readable at all transition states.
* Do not rely solely on motion to communicate structure.
* Respect `prefers-reduced-motion`.
* Ensure semantic structure: header, main, sections, project links/articles.

---

## Important Design Notes

* The transition should feel like a reveal through the hero visual, not a standard section fade.
* The hero should start minimal and spacious.
* The projects section should feel denser, more visual, and editorial.
* The project grid should be intentionally irregular.
* Motion should be smooth, controlled, and premium.
* The final colors, content, imagery, and exact typography will be provided separately.
* The developer should build the layout as a flexible system, not a one-off hardcoded composition.

---

## Acceptance Criteria

The implementation is successful if:

* The hero initially feels clean, minimal, and focused.
* The central hero visual scales and transitions smoothly on scroll.
* The projects section is revealed through or around the hero visual.
* The transition feels continuous rather than like two separate sections.
* The project grid has an editorial, non-uniform layout.
* The experience works across desktop, tablet, and mobile.
* Motion is performant and does not cause jank.
* Reduced-motion users receive an accessible fallback.
* The developer can swap in final colors, images, and content without rebuilding the interaction.
