import Footer from "../../components/Footer"

const RefundPolicy = () => {
  return (
    <div>
      <div className="privacy flex flex-col gap-[6vh] px-[1vw] md:px-[5vw] lg:px-[10vw] py-[10vh] text-[14px] text-textColor">
      <div className="text-black text-[20px] font-[900]">
        <h1>Refund Policy</h1>
      </div>

      <div>
        <p>Once we officially confirm your payment for the evaluation plan, we will email you the login details to access your evaluation. After you receive this information, we cannot issue a refund.</p>
      </div>

      <div>
        <p>However, we understand that in certain cases, you may need a refund. <span className='text-seco font-[900]'>If you notify us early and there are no trades placed on your account within the first 14 days, we may work with you to provide a refund.</span> For assistance with this type of scenario, please contact our live support.</p>
      </div>

      <div>
        <h1 className='text-heads font-bold text-base uppercase'>Dispute Policy:</h1>
        <p>Clients who <span className='text-seco font-[900]'>improperly dispute charges will face legal action and will be banned from our platform. Chargeback fraud is a significant issue in the prop firm industry.</span> Any traders who commit fraud through faulty chargebacks will have their names shared with other prop firms in the industry to ensure that bad actors do not have a lasting effect on prop firms.
        </p>
      </div>

      <div>
        <h1 className='text-heads font-bold text-base uppercase'>Refunds After Successful Completion of the Evaluation:</h1>
        <p>We offer both a 1-Step and 2-Step program. For our 1-Step program, we do not offer refunds of the challenge fee. Traders are rewarded based solely on their performance during the funded stage. For our 2-Step program, we also do not offer any refunds.</p>
      </div>

      <div>
        <h1 className='text-heads font-bold text-base uppercase'>Acceptance of This Policy:</h1>
        <p>It is your responsibility to familiarize yourself with this refund policy. By placing an order for any of our challenges, you indicate that you have read this refund policy and fully accept its terms.</p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default RefundPolicy