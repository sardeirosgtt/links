import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string,
    nome: string
    icon: keyof typeof MaterialIcons.glyphMap
}




export const categories: Category[] = [
    {
        id: "1",
        nome:"Curso",
        icon: "code"
    },
        {
        id: "2",
        nome:"Projeto",
        icon: "folder"
    },
        {
        id: "3",
        nome:"Site",
        icon: "language"
    },
        {
        id: "4",
        nome:"Artigo",
        icon: "newspaper"
    },
        {
        id: "5",
        nome:"Vídeo",
        icon: "movie"
    },
        {
        id: "6",
        nome:"Documentação",
        icon: "content-paste"
    },
]