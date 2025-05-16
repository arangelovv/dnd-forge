import Signal from "../signals/signal.js";

export default function StepperComponent() {
    const currentStep = new Signal(1);

    const steps = [
        { number: 1, name: "Details" },
        { number: 2, name: "Race" },
        { number: 3, name: "Class" },
        { number: 4, name: "Abilities" },
        { number: 5, name: "Background" },
        { number: 6, name: "Equipment" },
        { number: 7, name: "Review" },
    ];

    const stepperEl = document.getElementById("stepper");

    const renderStep = () => {
        stepperEl.innerHTML = steps
            .map((step, index) => {
                const isActive = step.number === currentStep.get();

                return `
                     <div class="stepper-step${isActive ? "-active" : ""} " data-step="${step.number}">
                         <div class="step-number">${step.number}</div>
                         <span class="step-name">${step.name}</span>
                        ${index < steps.length - 1 ? `<span class="step-break"></span>` : ""}
                     </div>

                    `;
            })
            .join("");

        stepperEl.querySelectorAll(".stepper-step").forEach((el) => {
            el.addEventListener("click", () => {
                const num = Number(el.dataset.step);
                console.log(num);
                currentStep.set(num);
                console.log(currentStep.get());
            });
        });
    };

    currentStep.reaction(renderStep);

    return renderStep();
}
