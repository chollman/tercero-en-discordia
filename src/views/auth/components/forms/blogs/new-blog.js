import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //This is import gives me pain
import { Button } from "react-bootstrap";

/*
    Necesitamos un componente editor para:
    1) Crear un blogpost
    2) Editar un blogpost que ya existe

    Para el caso 1) el State del Editor se inicia vacío
    Para el caso 2) tenemos que traerlo desde el endpoint

    Vamos a guardar en la DB el contenido de editorState.getCurrentContent() convertido a raw con la función
    convertToRaw. Y cuando lo traemos de DB, lo convertimos de nuevo con la función convertFromRaw.

    TODO:
    - Abstraer toda la lógica del editor a un componente editor, para reutilizarlo en los casos 1) y 2)
    - Crear estilos css para mejorar las visuales
    - Hacer Actions, Reducers, API calls, para guardar el blogpost vía backend, y para traer
    un blogpost desde backend
    - Agregar campos que faltan en la UI:
            -title
            -categories
            -author
            -comments
            -tags
 */

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
