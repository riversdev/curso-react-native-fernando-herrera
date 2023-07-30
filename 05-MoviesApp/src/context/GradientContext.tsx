import { createContext, useState } from 'react'

interface ImageColors {
    primary: string
    secondary: string
}

interface GradientContextProps {
    colors: ImageColors
    prevColors: ImageColors
    setColors: ({ }: ImageColors) => void
    setPrevColors: ({ }: ImageColors) => void
}

export const GradientContext = createContext({} as GradientContextProps)

export const GradientProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [colors, setColors] = useState<ImageColors>({ primary: 'transparent', secondary: 'transparent' })
    const [prevColors, setPrevColors] = useState<ImageColors>({ primary: 'transparent', secondary: 'transparent' })

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,

                setColors,
                setPrevColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}