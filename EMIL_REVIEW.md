# Interaction and motion review

| Before | After | Why |
|---|---|---|
| Generic section rhythm with similar cards | Editorial section numbering, split headings, and deliberate visual anchors | Hierarchy now communicates where the visitor is and why the next block matters |
| Giada trial described only in copy | Real Giada screens integrated into a layered product composition | Product evidence makes the seven-day trial concrete without adding decorative UI |
| Creator profiles presented as compact tabs | Three self-selection paths with immediate descriptions and a detailed active panel | The interaction explains intent before asking for a click |
| Qualification shown as one dark checklist | Paired “Sei in linea se” and “Non basta” cards | Clear boundaries feel professional without sounding elitist |
| Application form appeared without journey context | Three-step path, progress cue, short form, and immediate expectation note | Reduces uncertainty while keeping qualification low-friction |
| CTA could shrink after the final webfont width settled | Navigation CTA now has fixed flex behavior and no wrapping | Prevents late-layout clipping while scrolling |
| Accordion animated layout height | FAQ content changes immediately; only the chevron uses a transform transition | Avoids layout animation while retaining state feedback |
| Generic hover behavior | Hover is gated to fine pointers; press uses `scale(0.97)` for 150 ms | Keeps touch behavior clean and buttons responsive |
| Motion applied as decoration | Only the rare hero entrance uses longer marketing motion; repeated controls stay immediate | Animation has a purpose and does not slow the core journey |

The implementation uses no `transition: all`, `scale(0)` entrances, `ease-in`, CSS gradients, or ungated hover motion. Reduced-motion removes position movement while preserving state clarity.
