"use server";

import { db } from "@/lib/db";
import { TemplateFolder } from "../lib/path-to-json";
import { currentUser } from "@/modules/auth/actions";




export const getPlaygroundById = async(id:string)=>{
    const user = await currentUser();
    if (!user?.id) {
        throw new Error("Unauthorized: You must be logged in");
    }

    try {
        const playground = await db.playground.findUnique({
            where:{id},
            select:{
                title:true,
                userId:true,
                templateFiles:{
                    select:{
                        content:true
                    }
                }
            }
        })

        if (!playground) {
            throw new Error("Playground not found");
        }

        // Verify ownership
        if (playground.userId !== user.id) {
            throw new Error("Forbidden: You do not own this playground");
        }

        return playground;
    } catch (error) {
        console.error("[getPlaygroundById]", error);
        throw error;
    }
}

export const SaveUpdatedCode = async(playgroundId:string , data:TemplateFolder)=>{
    const user = await currentUser();
    if (!user?.id) {
        throw new Error("Unauthorized: You must be logged in");
    }

    // Verify ownership
    const playground = await db.playground.findUnique({
        where: { id: playgroundId },
        select: { userId: true },
    });

    if (!playground) {
        throw new Error("Playground not found");
    }

    if (playground.userId !== user.id) {
        throw new Error("Forbidden: You do not own this playground");
    }

  try {
    const updatedPlayground = await db.templateFile.upsert({
        where:{
            playgroundId
        },
        update:{
            content:JSON.stringify(data)
        },
        create:{
            playgroundId,
            content:JSON.stringify(data)
        }
    })

    return updatedPlayground;
  } catch (error) {
     console.error("[SaveUpdatedCode]", error);
    throw new Error("Failed to save code");
  }
}