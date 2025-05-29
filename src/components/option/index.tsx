import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'
import { colors } from '@/styles/colors'

type Props = TouchableOpacityProps & {
    name: string,
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}

export default function Option({ name, icon, variant = "primary", ...rest }: Props) {
    return (

        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons 
            name={icon} 
            size={20} 
            color={variant === "primary" ? colors.green[300] : colors.gray[400]} 
            />
            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>

    )
}
