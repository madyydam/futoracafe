# Implementation Plan - Futora Cafe Overhaul

This plan outlines the steps to complete the Futora Cafe website, shifting branding from "The Common Cafe" to "Futora Cafe", updating the menu to be cafe-focused, removing the franchise section, and adding high-energy animations.

## Objectives
1.  **Rebrand**: Replace all instances of "The Common Cafe" with "Futora Cafe".
2.  **Menu Shift**: Transition from Dosa-heavy menu to true Cafe items (Coffee, Snacks, Desserts).
3.  **Clean Up**: Temporarily remove the Franchise page and related navigation.
4.  **Animation Suite**: Implement "Hanging", "Stretching", and "Directional Sweep" animations across the site.
5.  **Performance Fix**: Resolve the infinite loop error causing browser crashes.

## Phase 1: Global Branding & Cleanup
- [ ] Global search and replace: "The Common Cafe" -> "Futora Cafe".
- [ ] Update `src/app/layout.tsx` metadata.
- [ ] Remove "Franchise" link from `Header.tsx`.
- [ ] Redirect or remove `src/app/franchise/page.tsx`.

## Phase 2: Menu Content Revamp
- [ ] Update `src/app/menu/page.tsx` to remove Dosa-specific sections:
    - `NamasteAnnaPizzaSection`
    - `JainJuhuChowpatty`
    - `FutoraSpecialMenu`
- [ ] Enhance `WelcomeMenu` style items.
- [ ] Create or update `MustTryDishes` with cafe-style food (Sandwiches, Tarts, Lattes).

## Phase 3: Advanced Animations
- [ ] **Hanging Logic**: Implement CSS/Framer motion "pendulum" animations for cards and headers.
- [ ] **Thread Stretching**: Add SVG connectors between sections that "stretch" as you scroll.
- [ ] **Directional Swipes**: Add entrance animations for all sections (Up from bottom, Slides from sides).
- [ ] **Micro-interactions**: Enhance button hovers and image interactions.

## Phase 4: Verification & Polish
- [ ] Fix the "Maximum update depth exceeded" runtime error.
- [ ] Final visual audit for branding consistency.
- [ ] Verify build and performance.
