import { ImageResponse } from 'next/og';

// 파비콘 이미지 크기 설정
export const size = {
    width: 128,
    height: 128,
};
export const contentType = 'image/png';

// 파비콘 생성 컴포넌트
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // 브랜드 테마 그라데이션 (Teal to Blue)
                    background: 'linear-gradient(to bottom right, #14b8a6, #3b82f6)',
                    color: 'white',
                    fontSize: '80px',
                    fontWeight: 800,
                    borderRadius: '20%',
                }}
            >
                R
            </div>
        ),
        {
            ...size,
        }
    );
}