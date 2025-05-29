import { categories } from '@/utils/categorys'
import React from 'react'
import { FlatList } from 'react-native'
import { Category } from '../category'
import { styles } from './styles'

export function Categories() {

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category name={item.nome} icon={item.icon} isSelected={false} />
            )}
            horizontal
            style ={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}

