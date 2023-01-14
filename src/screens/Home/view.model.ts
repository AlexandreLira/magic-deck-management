import { useMemo, useRef, useCallback } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


export function useHomeViewModel() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);


    const snapPoints = useMemo(() => ['100%'], []);


    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);


    return {
        snapPoints,
        bottomSheetModalRef,
        handlePresentModalPress,
        handleCloseModalPress

    }
}