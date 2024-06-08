export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2>Inner layout</h2>
            {children}
        </div>
    );
}