/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
  Editor,
  EditorComposer,
  EditorProps,
} from "@nitrolab/lexical-playground";
import "@nitrolab/lexical-playground/editor.css";
import "@nitrolab/lexical-playground/theme.css";

const toolbarConfig: EditorProps["toolbarConfig"] = {
  textColorPicker: false,
  bgColorPicker: false,
  fontFamilyOptions: [
    ["Roboto", "Roboto"],
    ["Open Sans", "Open Sans"],
  ],
};

function MyEditor(): JSX.Element {
  return <Editor toolbarConfig={toolbarConfig} isRichText />;
}

function PlaygroundApp(): JSX.Element {
  return (
    <EditorComposer>
      <MyEditor />
    </EditorComposer>
  );
}

import ExampleTheme from "./ExampleTheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";

const placeholder = "Enter some rich text...";

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
};

export default function App() {
  return (
    <EditorComposer>
      <MyEditor />
    </EditorComposer>
  );
}
