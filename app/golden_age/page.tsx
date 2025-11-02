"use client";

import "../app.css";
import "@aws-amplify/ui-react/styles.css";
import Header from '../components/Header';

export default function Golden_Age({}: {children: React.ReactNode}) {
    return (
        <Header
            hrefs={[
                '/',
                '/black_swordsman',
                '/golden_age',
                '/conviction',
                '/falcon_millennium',
                '/fantasia'
            ]}
        />
    );
}