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
  bgColorPicker: true,
  fontFamilyOptions: [
    ["Roboto", "Roboto"],
    ["Open Sans", "Open Sans"],
  ],
};

function MyEditor(): JSX.Element {
  return <Editor toolbarConfig={toolbarConfig} isRichText />;
}

export default function App() {
  return (
    <EditorComposer>
      <MyEditor />
    </EditorComposer>
  );
}
