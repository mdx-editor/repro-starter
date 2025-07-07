import { headingsPlugin, MDXEditor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
const md = `
# Lorem Ipsum

## Lorem Ipsum

### Lorem Ipsum

`;

export default function App() {
  return <MDXEditor markdown={md} plugins={[headingsPlugin()]} />;
}
