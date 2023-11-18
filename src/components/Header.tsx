import React from 'react'
import styles from '../styles/header.module.scss'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className={styles.header}>
            <h1>MKS <span>Sistemas</span></h1>
        </header>
    )
}