import React, {useEffect} from 'react'

const ScriptImporter = (urlResource: any) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "././VideoPage_template.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [urlResource])
}

export default ScriptImporter
