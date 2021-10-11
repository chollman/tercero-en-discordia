import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //This is import gives me pain
import { Button } from "react-bootstrap";

const NewBlog = () => {
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    const onSave = () => {
        const contentState = editorState.getCurrentContent();
        const raw = convertToRaw(contentState);
        console.log(raw);
    }

    return (
        <div>
            <Editor
                wrapperClassName={"container"}
                editorClassName="editor-class"
                onEditorStateChange={setEditorState}
            />
            <Button onClick={onSave}>Test</Button>
        </div>
    );
};

export default NewBlog;
