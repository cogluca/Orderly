import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { TRANSFORMERS } from "@lexical/markdown";
import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";



function onError(error){
    console.log(error);
}


function onChange(editorState) {
    editorState.read(() => {
        // Read the contents of the EditorState here.
        const root = $getRoot();
        const selection = $getSelection();

        console.log(root, selection);
    });
}


function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);

    return null;
}

function Editor() {

    const config = {

        namespace: 'Editor',
        theme: {
            h1:'editor-heading-h1',
        },
        onError: onError,
        nodes:[
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode
        ]
    }

    return (
      <LexicalComposer initialConfig={config}>
          <RichTextPlugin contentEditable={<ContentEditable/>}>
          </RichTextPlugin>
        <OnChangePlugin onChange={onChange}/>
          <MyCustomAutoFocusPlugin/>
          <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
      </LexicalComposer>

    );
}

export {Editor};