import React from "react"
import styles from "./styles.css"

type Props = {
    departments: [Category],
    handleSetSlug: any
}
type Category = {
    id: number
    name: string
    slug: string
}



const DepartmentGroup = ({departments, handleSetSlug}: Props) => {
    //console.log("Mi grupo de departamentos:", departments)

    const onHandleSetSlug = (e: any) => {
        handleSetSlug(`${e.target.value}/$\{term\}&map=ft`)
    }

    const departmentoptions: any = departments.map((department: Category)=>{
        return (
            <option 
            value={department.slug}
            key={department.id}
             >
                {department.name}
            </option>
        )
    })

    return (
        <select className={styles.department__select}
        onChange={onHandleSetSlug}
        defaultValue="value0" >
            <option disabled value="value0" >Seleccione una opción</option>
            {departmentoptions}
        </select>
    )
}


export default DepartmentGroup