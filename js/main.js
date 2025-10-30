// PRODUCTOS

import { productos } from "./productos.js";

/*

const productos = [
    {
        "id": "K-CAT-INS-PC-LID-1/1",
        "titulo": "TAPADERA PARA INSERTO 1/1",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-1-300x300.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 90.0
    },
    {
        "id": "K-CAT-INS-PC-LID-1/2",
        "titulo": "TAPADERA PARA INSERTO 1/2",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 45.0
    },
    {
        "id": "K-CAT-INS-PC-LID-1/3",
        "titulo": "TAPADERA PARA INSERTO 1/3",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/1-6.5",
        "titulo": "INSERTO PERFORADO 1/1 DE 6.5CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-1-6.5-2-300x300.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 120.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/1-10",
        "titulo": "INSERTO PERFORADO 1/1 DE 10CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-1-10-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 130.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/1-15",
        "titulo": "INSERTO PERFORADO 1/1 DE 15CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-1-15-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 150.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/2-6.5",
        "titulo": "INSERTO PERFORADO 1/2 DE 6.5CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-2-6.5-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 85.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/2-10",
        "titulo": "INSERTO PERFORADO 1/2 DE 10CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-2-10-1-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 95.0
    },
    {
        "id": "K-CAT-INS-SS-PERF-1/2-15",
        "titulo": "INSERTO PERFORADO 1/2 DE 15CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS-PERF-1-2-15-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS PERFORADO DE ACERO INOXIDABLE"
        },
        "precio": 115.0
    },
    {
        "id": "K-CAT-INS-SOPA-TAPA-S",
        "titulo": "TAPA PARA INSERTO CILINDRICO DE 4LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2235208-4lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 65.0
    },
    {
        "id": "K-CAT-INS-SOPA-TAPA-M",
        "titulo": "TAPA PARA INSERTO CILINDRICO DE 7LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2234428-7lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 70.0
    },
    {
        "id": "K-CAT-INS-SOPA-TAPA-L",
        "titulo": "TAPA PARA INSERTO CILINDRICO DE 11LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2354521-11lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 75.0
    },
    {
        "id": "K-CAT-INS-SOPA-4L",
        "titulo": "INSERTO CILINDRICO 4LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2234828-4lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 120.0
    },
    {
        "id": "K-CAT-INS-SOPA-7L",
        "titulo": "INSERTO CILINDRICO 7LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2230673-7lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 160.0
    },
    {
        "id": "K-CAT-INS-SOPA-11L",
        "titulo": "INSERTO CILINDRICO 11LT",
        "imagen": "https://kossino.com/wp-content/uploads/2024/11/2328368-11lt.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS CILINDRICO DE ACERO INOXIDABLE"
        },
        "precio": 200.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/1",
        "titulo": "TAPADERA DE INSERTO 1/1",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-1-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 70.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/2",
        "titulo": "TAPADERA DE INSERTO 1/2",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-2.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/3",
        "titulo": "TAPADERA DE INSERTO 1/3",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-3.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 30.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/4",
        "titulo": "TAPADERA DE INSERTO 1/4",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-4.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/6",
        "titulo": "TAPADERA DE INSERTO 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-6-600x702.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 20.0
    },
    {
        "id": "K-CAT-INS-SS-LID-1/9",
        "titulo": "TAPADERA DE INSERTO 1/9",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/Lid-1-9.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 20.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/1",
        "titulo": "TAPA RANURADA DE 1/1",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-1-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 70.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/2",
        "titulo": "TAPA RANURADA DE 1/2",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-2-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 50.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/3",
        "titulo": "TAPA RANURADA DE 1/3",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-3-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/4",
        "titulo": "TAPA RANURADA DE 1/4",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-4-2.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 30.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/6",
        "titulo": "TAPA RANURADA DE 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-6-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-INS-SS-RANU-1/9",
        "titulo": "TAPA RANURADA DE 1/9",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-SS.RANU-1-9-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "TAPADERA INSERTOS DE ACERO INOXIDABLE"
        },
        "precio": 0.0
    },
    {
        "id": "K-CAT-INS-SS-1/1-6.5CM",
        "titulo": "INSERTO 1/1 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-2.5p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/1"
        },
        "precio": 80.0
    },
    {
        "id": "K-CAT-INS-SS-1/1-10CM",
        "titulo": "INSERTO 1/1 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-4p-3.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/1"
        },
        "precio": 100.0
    },
    {
        "id": "K-CAT-INS-SS-1/1-15CM",
        "titulo": "INSERTO 1/1 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-6p.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/1"
        },
        "precio": 130.0
    },
    {
        "id": "K-CAT-INS-SS-1/1-20CM",
        "titulo": "INSERTO DE ACERO INOXIDABLE GN 1/1 – 20 CM DE PROFUNDIDAD",
        "imagen": "https://kossino.com/wp-content/uploads/2025/07/inserto-1-1-20cm-2.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/1"
        },
        "precio": 160.0
    },
    {
        "id": "K-CAT-INS-SS-1/2-6.5CM",
        "titulo": "INSERTO 1/2 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-2.5p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/2"
        },
        "precio": 50.0
    },
    {
        "id": "K-CAT-INS-SS-1/2-10CM",
        "titulo": "INSERTO 1/2 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-4p.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/2"
        },
        "precio": 65.0
    },
    {
        "id": "K-CAT-INS-SS-1/2-15CM",
        "titulo": "INSERTO 1/2 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-6p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/2"
        },
        "precio": 80.0
    },
    {
        "id": "K-CAT-INS-SS-1/3-6.5CM",
        "titulo": "INSERTO 1/3 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-2.5cm.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/3"
        },
        "precio": 45.0
    },
    {
        "id": "K-CAT-INS-SS-1/3-10CM",
        "titulo": "INSERTO 1/3 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-4p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/3"
        },
        "precio": 55.0
    },
    {
        "id": "K-CAT-INS-SS-1/3-15CM",
        "titulo": "INSERTO 1/3 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-6p-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/3"
        },
        "precio": 70.0
    },
    {
        "id": "K-CAT-INS-SS-1/4-6.5CM",
        "titulo": "INSERTO 1/4 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-2.5p-1-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/4"
        },
        "precio": 40.0
    },
    {
        "id": "K-CAT-INS-SS-1/4-10CM",
        "titulo": "INSERTO 1/4 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-4p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/4"
        },
        "precio": 50.0
    },
    {
        "id": "K-CAT-INS-SS-1/4-15CM",
        "titulo": "INSERTO 1/4 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-6.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/4"
        },
        "precio": 65.0
    },
    {
        "id": "K-CAT-INS-SS-1/6-6.5CM",
        "titulo": "INSERTO 1/6 6.5CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-2.5p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/6"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-SS-1/6-10CM",
        "titulo": "INSERTO 1/6 DE 10CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-4p.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/6"
        },
        "precio": 40.0
    },
    {
        "id": "K-CAT-INS-SS-1/6-15CM",
        "titulo": "INSERTO 1/6 15CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-6p.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/6"
        },
        "precio": 55.0
    },
    {
        "id": "K-CAT-INS-SS-1/9-6.5CM",
        "titulo": "INSERTO 1/9 6.5CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-9-2.5p-1-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/9"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-INS-SS-1/9-10CM",
        "titulo": "INSERTO 1/9 10CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-9-4p-1.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/9"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-SS-1/9-15CM",
        "titulo": "INSERTO 1/9 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2024/04/1-9-15cm-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "INSERTOS DE ACERO INOXIDABLE 1/9"
        },
        "precio": 45.0
    },
    {
        "id": "K-CAT-ACC-BARRA-12PLG",
        "titulo": "BARRA DE ACERO INOXIDABLE PARA MESAS CALIENTES 12\"",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/barra-para-mesas-calientes-12plg.webp-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "BARRA DE ACERO INOXIDABLE PARA MESAS CALIENTES"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-ACC-BARRA-20PLG",
        "titulo": "BARRA DE ACERO INOXIDABLE PARA MESAS CALIENTES 20\"",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/barra-para-mesas-calientes-20plg.webp-1.webp",
        "categoria": {
            "id": "INSERTOS_DE_ACERO_INOXIDABLE",
            "nombre": "BARRA DE ACERO INOXIDABLE PARA MESAS CALIENTES"
        },
        "precio": 40.0
    },
    {
        "id": "K-CAT-INS-PC-LID-1/4",
        "titulo": "TAPADERA PARA INSERTO 1/4",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-INS-PC-RANU-1/4",
        "titulo": "TAPADERA RANURADA PARA 1/4",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/2581132.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 30.0
    },
    {
        "id": "K-CAT-INS-PC-LID-1/6",
        "titulo": "TAPADERA PARA INSERTO 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 20.0
    },
    {
        "id": "K-CAT-INS-PC-RANU-1/6",
        "titulo": "TAPADERA RANURADA DE 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/2037831-removebg-preview.png",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 20.0
    },
    {
        "id": "K-CAT-INS-PC-FLIP-1/6",
        "titulo": "TAPADERA FLIP PARA 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/61Eh1QwFqeL._AC_UF8941000_QL80_-600x551.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 30.0
    },
    {
        "id": "K-CAT-INS-PC-LID-1/9",
        "titulo": "TAPADERA PARA INSERTO 1/9",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-9-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 15.0
    },
    {
        "id": "K-CAT-INS-PC-RANU-1/9",
        "titulo": "TAPADERA RANURADA PARA 1/9",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/2010132-removebg-preview.png",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "TAPADERA INSERTOS DE POLICARBONATO"
        },
        "precio": 15.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/1",
        "titulo": "DRENAJE PARA INSERTO 1/1",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-PC-DRENA-1-1-1.webp",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 70.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/2",
        "titulo": "DRENAJE PARA INSERTO 1/2",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-PC-DRENA-1-2-1.jpg",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 35.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/3",
        "titulo": "DRENAJE PARA INSERTO 1/3",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-PC-DRENA-1-3-1-1.webp",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 30.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/4",
        "titulo": "DRENAJE PARA INSERTO 1/4",
        "imagen": "https://kossino.com/wp-content/uploads/2025/02/K-CAT-INS-PC-DRENA-1-4-2.webp",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 20.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/6",
        "titulo": "DRENAJE PARA INSERTO 1/6",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/2580992.jpg",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 15.0
    },
    {
        "id": "K-CAT-INS-PC-DRENA-1/9",
        "titulo": "DRENAJE PARA INSERTO 1/9",
        "imagen": "https://kossino.com/wp-content/uploads/2023/12/1754282.jpg",
        "categoria": {
            "id": "ACCESORIOS_PARA_INSERTOS",
            "nombre": "DRENAJE PARA INSERTO"
        },
        "precio": 10.0
    },
    {
        "id": "K-CAT-INS-PC-1/1-6.5CM",
        "titulo": "INSERTO 1/1 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-6cm.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/1"
        },
        "precio": 125.0
    },
    {
        "id": "K-CAT-INS-PC-1/1-10CM",
        "titulo": "INSERTO 1/1 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-4p.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/1"
        },
        "precio": 145.0
    },
    {
        "id": "K-CAT-INS-PC-1/1-15CM",
        "titulo": "INSERTO 1/1 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-1-6p.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/1"
        },
        "precio": 185.0
    },
    {
        "id": "K-CAT-INS-PC-1/1-20CM",
        "titulo": "INSERTO 1/1 DE 20CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2025/04/1-1-20CM-300x300.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/1"
        },
        "precio": 209.0
    },
    {
        "id": "K-CAT-INS-PC-1/2-6.5CM",
        "titulo": "INSERTO 1/2 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-6cm.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/2"
        },
        "precio": 63.0
    },
    {
        "id": "K-CAT-INS-PC-1/2-10CM",
        "titulo": "INSERTO 1/2 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-10cm-600x600.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/2"
        },
        "precio": 79.0
    },
    {
        "id": "K-CAT-INS-PC-1/2-15CM",
        "titulo": "INSERTO 1/2 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-2-15cm-600x600.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/2"
        },
        "precio": 105.0
    },
    {
        "id": "K-CAT-INS-PC-1/3-6.5CM",
        "titulo": "INSERTO 1/3 DE 6.5CM",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-10cm.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/3"
        },
        "precio": 52.0
    },
    {
        "id": "K-CAT-INS-PC-1/3-10CM",
        "titulo": "INSERTO 1/3 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-10cm-1-600x600.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/3"
        },
        "precio": 65.0
    },
    {
        "id": "K-CAT-INS-PC-1/3-15CM",
        "titulo": "INSERTO 1/3 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-3-15cm.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/3"
        },
        "precio": 79.0
    },
    {
        "id": "K-CAT-INS-PC-1/4-6.5CM",
        "titulo": "INSERTO 1/4 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-6cm-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/4"
        },
        "precio": 32.0
    },
    {
        "id": "K-CAT-INS-PC-1/4-10CM",
        "titulo": "INSERTO 1/4 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-10cm-600x600.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/4"
        },
        "precio": 39.0
    },
    {
        "id": "K-CAT-INS-PC-1/4-15CM",
        "titulo": "INSERTO 1/4 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-4-15cm-600x600.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/4"
        },
        "precio": 43.0
    },
    {
        "id": "K-CAT-INS-PC-1/6-6.5CM",
        "titulo": "INSERTO 1/6 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-6cm-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/6"
        },
        "precio": 27.0
    },
    {
        "id": "K-CAT-INS-PC-1/6-10CM",
        "titulo": "INSERTO 1/6 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-4p-1-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/6"
        },
        "precio": 33.0
    },
    {
        "id": "K-CAT-INS-PC-1/6-15CM",
        "titulo": "INSERTO 1/6 DE 15CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-6-15cm-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/6"
        },
        "precio": 39.0
    },
    {
        "id": "K-CAT-INS-PC-1/9-6.5CM",
        "titulo": "INSERTO 1/9 DE 6.5CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-9-6cm.webp",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/9"
        },
        "precio": 19.0
    },
    {
        "id": "K-CAT-INS-PC-1/9-10CM",
        "titulo": "INSERTO 1/9 DE 10CMS",
        "imagen": "https://kossino.com/wp-content/uploads/2023/01/1-9-10cm-600x600.jpg",
        "categoria": {
            "id": "INSERTOS_DE_POLICARBONATO",
            "nombre": "INSERTOS DE POLICARBONATO 1/9"
        },
        "precio": 25.0
    },
    {
        "id": "K-CAT-CHAF-DLX-RA2301A",
        "titulo": "CHAFER DELUXE RECTANGULAR DE 9LTS",
        "imagen": "https://kossino.com/wp-content/uploads/2024/01/E1104.webp",
        "categoria": {
            "id": "BANQUETES",
            "nombre": "BANQUETES"
        },
        "precio": 1600.0
    },
    {
        "id": "CAT-CHAF-DLX-RA2101B",
        "titulo": "CHAFER DELUXE REDONDO DE 6LTS",
        "imagen": "https://kossino.com/wp-content/uploads/2024/01/roll-top-round-chafer-600x600.jpg",
        "categoria": {
            "id": "BANQUETES",
            "nombre": "BANQUETES"
        },
        "precio": 1250.0
    },
    {
        "id": "K-CAT-CHAF-ECO-WH433B",
        "titulo": "CHAFER ECONOMICO RECTANGULAR DE 9LTS",
        "imagen": "https://kossino.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-04-01-at-9.03.01-PM.jpeg",
        "categoria": {
            "id": "BANQUETES",
            "nombre": "BANQUETES"
        },
        "precio": 450.0
    },
    {
        "id": "K-CAT-CHAF-REP-GAS",
        "titulo": "RECIPIENTE PARA LATA DE GAS",
        "imagen": "https://kossino.com/wp-content/uploads/2024/01/CDB0002-1-1.jpg",
        "categoria": {
            "id": "BANQUETES",
            "nombre": "BANQUETES"
        },
        "precio": 40.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-W02",
        "titulo": "BAJA PLATOS PLASTICO BLANCO CLASICO DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/BAJA-PLATO-PLASTICO-BLANCO-CLASICO-DE-33CM.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-W04",
        "titulo": "BAJA PLATOS PLASTICO BLANCO ELEGANTE DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/BAJA_PLATO_PLASTICO_BLANCO_ELEGANTE_DE_33CM_1-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-W03",
        "titulo": "BAJA PLATOS PLASTICO BLANCO FLORAL DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/BAJA-PLATO-PLASTICO-BLANCO-FLORAL-DE-33CM-600x600.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-W01",
        "titulo": "BAJA PLATOS PLASTICO BLANCO VINTAGE DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-10-06_at_8.49.19_AM-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-C01",
        "titulo": "BAJA PLATOS PLASTICO CAFE CAMPESTRE DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.11.02_AM-removebg-preview.png",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-G42/2",
        "titulo": "BAJA PLATOS PLASTICO VERDE COLONIAL DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.09.48_AM-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-N02",
        "titulo": "BAJA PLATOS PLASTICO DORADO NATIVIDAD DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.09.47_AM__1_-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-N03",
        "titulo": "BAJA PLATOS PLASTICO ROJO NATIVIDAD DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.18.55_AM-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-N01",
        "titulo": "BAJA PLATOS PLASTICO PLATEADO NATIVIDAD DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.18.56_AM-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-F18",
        "titulo": "BAJA PLATOS PLASTICO TRANSPARENTE PUNTOS DORADOS DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/baja-plato-transparente-puntos-dorados.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-F54/2",
        "titulo": "BAJA PLATOS PLASTICO DORADO SOL DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/02_105935797_SI_11-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-B01",
        "titulo": "BAJA PLATOS PLASTICO NEGRO ELEGANTE DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/WhatsApp_Image_2025-09-24_at_9.09.47_AM-removebg-preview.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    },
    {
        "id": "K-VAJ-BAJAPLATO-G41",
        "titulo": "BAJA PLATOS PLASTICO PLATEADO LUNAR DE 33 CM",
        "imagen": "https://kossino.com/wp-content/uploads/2025/09/BAJA-PLATO-PLASTICO-PLATEADO-LUNAR-DE-33CM.webp",
        "categoria": {
            "id": "SOBREMESA",
            "nombre": "BAJA PLATOS"
        },
        "precio": 25.0
    }
]

// TERMINAN LOS DATOS

*/




const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `        
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo" >${producto.titulo}</h3>
                        <p class="producto-precio">Q${producto.precio.toFixed(2)}</p>
                        
                    </div>
                `;
        contenedorProductos.append(div);
    })
}

// <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !== "TODOS") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            /*console.log(productoCategoria.categoria.id);*/
            tituloPrincipal.innerText = productoCategoria.categoria.id.replace(/_/g, " ");
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
            cargarProductos(productos);
        }
    })
})

