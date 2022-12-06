# Create Markdown action

This action creates from the images markdown file containing these images.

## Inputs

### `inputDirectory`

**Required** Input directory, which contains all images.

## Outputs

### `Output directory`

The time we greeted you.

## Example usage

```yaml
uses: actions/create-markdown-action@main
with:
  inputDir: 'directory/'
```