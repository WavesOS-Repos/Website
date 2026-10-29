<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- The WavesOS site lives in src/components/wavesos and keeps its original plain-CSS classes in src/styles.css; it is a static site with no backend, so don't add one unless asked.
- Theme state belongs only on the document html element; body inherits its tokens so light mode cannot be overridden by a nested dark class.
- Desktop media is discovered by Vite globs from src/assets/desktop-previews, including CDN .asset.json pointers; this keeps the gallery automatic and static without a directory-listing backend.
- WavesOS text colors use --site-muted, separate from the design system's --muted surface token, to prevent invalid CSS color values.
