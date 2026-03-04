export default function GridBackground() {
    return (
        <div
            className="absolute inset-0 z-10"
            style={{
                backgroundImage: `
            linear-gradient(to right, #750016 1px, transparent 1px),
            linear-gradient(to bottom, #750016 1px, transparent 1px)
          `,
                backgroundSize: '40px 4px',
                WebkitMaskImage:
                    'radial-gradient(ellipse 70% 70% at 50% 50%, #000 2%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 2%, transparent 70%)',
            }}
        />
    );
}
