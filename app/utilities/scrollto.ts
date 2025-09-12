export default function ScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
};