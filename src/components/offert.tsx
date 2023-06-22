import { Festive } from "next/font/google"
import Image from "next/image"
import ProgramCard from "./programCard"

export default function Offerts() {
    return (   
        <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center flex"
            id="offerts"
        >
            <ProgramCard 
                name="Técnico Universitario Auditor Forense en Investigaciones Criminales"
                url="https://auditorforense.pulse.is/"
                imageUrl="/taf.jpg"
            />

            <ProgramCard 
                name="Licenciatura en Investigación Criminal y Seguridad"
                url="#"
                imageUrl="/lics.jpg"
            />

            <ProgramCard 
                name="Maestría en Investigación Criminal"
                url="#"
                imageUrl="/lics.jpg"
            />

            <ProgramCard 
                name="Doctorado en Justicia Criminal y Seguridad"
                url="#"
                imageUrl="/lics.jpg"
            />

            <ProgramCard 
                name="Licenciatura en Ciencias Policiales"
                url="#"
                imageUrl="/lics.jpg"
            />

            <ProgramCard 
                name="Diplomados"
                url="#"
                imageUrl="/lics.jpg"
            />
        </div>
    )

}