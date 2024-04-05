"use client"

import { useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import Toolbar from "@/components/toolbar";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"document">;

    }
}

const DocumentIdPage = ({
    params
} : DocumentIdPageProps) => {

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    if (document === undefined) {
        return <div>Loading...</div>;
    }


    return ( 
        <div className="pb-40">
            <div className="h-[35vh]"></div>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto"></div>
            <Toolbar initialData={document}/>
        </div>
     );
}
 
export default DocumentIdPage;