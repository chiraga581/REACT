import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'

export default function RTE ({ name , control , label , defaultValue ="" }) {
   
    return (
      
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'>
                    {label}
                </label>
            }
            <Controller 
                name={name || 'Content'}
                control={control}
                render={({ field: { onChange } }) => (

                    <Editor
                        apiKey='8srbjtvfy8dau7gr5cc3bpzkw9rvrk53uq0ohoc31qoy3n89'
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={
                            {
                                branding: false,
                                height: 500,
                                menubar: false,
                                initialValue: defaultValue,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar:
                                    'undo redo | blocks | image | formatselect | bold italic forecolor  backcolor |alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | removeformat | help ',

                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:18px"
                            }
                        }
                        onEditorChange={onChange} 
                    />   
                )}
            />
        </div>
    )
}


//   EDITOR IS DESIGNED IN SEPERATE COMPONENT WILL BE IMPORTED HERE ANS REFENRECE NEEDED TO BE TAKEN CARE OFF
{/* <Editor 
    initialValue='default Value'
    init={
        {
            branding: false,
            height: 500,
            menubar: true,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic  backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help '
        }
    }
/> */}

