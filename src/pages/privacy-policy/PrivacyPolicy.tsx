import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>OX Trade | Privacy Policy</title>
      </Helmet>
      <div className="privacy  flex flex-col gap-[6vh]  px-[1vw] md:px-[5vw] lg:px-[10vw] pt-14 md:pt-20 lg:py-[10vh]  text-[14px] text-textColor">
        <div className="text-black text-[20px] font-[900]">
          <h1>Privacy Policy</h1>
        </div>

        <div className=''>
          <p>The protection of your personal information is a key priority for Ox Trade Funding, also known as The FFrt. Srl, a Romania-based company. This Privacy Policy applies to the <a href="oxtradefunding.com" className='cursor-pointer text-blue-300 hover:underline '>oxtradefunding.com</a> website and governs how your data is collected and used.</p>
        </div>

        <div>
          <p>For the purpose of this Privacy Policy, all references to The FFrt. Srl include <a href="oxtradefunding.com" className='cursor-pointer text-blue-300 hover:underline' > oxtradefunding.com </a>and Ox Trade Funding. The Ox Trade Funding website is a forex trading simulation site designed to reward retail traders for their skills. By using the Ox Trade Funding website, you agree to the data practices outlined in this statement.</p>
        </div>

        <div>
          <p>To provide you with better products and services, The FFrt. Srl may collect <span className='text-seco font-[900]'>personally identifiable</span> information such as your <span className='text-seco font-[900]'>first and last name, mailing address, email address, phone number, and ID or passport photo for KYC</span>. If you purchase products or services from Ox Trade Funding, we may collect billing and credit card information to complete the transaction. We do not collect any personal information about you unless you voluntarily provide it. However, you may be required to provide certain personal information when using certain products or services, such as registering for an account, entering a sweepstake, signing up for special offers from third parties, sending us an email, or submitting payment information. We will use your information to communicate with you regarding requested products or services, and may gather additional personal or non-personal information in the future.</p>
        </div>

        <div>
          <p>The FFrt. Srl collects and uses your personal information to deliver the services you have requested and may inform you of other products or services available from The FFrt. Srl and its affiliates.</p>
        </div>

        <div>
          <p>The FFrt. Srl may share your data with trusted partners to perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide services to The FFrt. Srl and are required to maintain the confidentiality of your information. The FFrt. Srl may disclose your personal information, without notice, if required to do so by law or in good faith belief that such action is necessary to comply with legal process or protect the rights and property of The FFrt. Srl or the public.</p>
        </div>

        <div>
          <p>The FFrt. Srl <span className='text-seco font-[900]'> may track user behavior to determine which services are most popular and deliver</span> customized content and advertising within Ox Trade Funding to customers whose behavior indicates their interest in a particular subject area.</p>
        </div>

        <div>
          <p>Information about your computer hardware and software may be automatically collected by The FFrt. Srl, including your IP address, browser type, domain names, access times, and referring website addresses. This information is used to operate and maintain the quality of the service and provide statistics about the use of the Ox Trade Funding website.</p>
        </div>

        <div className='flex flex-col gap-[20px]'>
          <p className='text-heads font-bold text-base uppercase'>Links</p>
          <p>Please be aware that other sites linked from this website are not under the responsibility of The FFrt. Srl, also known as Ox Trade Funding, a company located in Romania, and we are not responsible for the content or privacy practices of those sites. We encourage our users to be aware of this and to read the privacy statements of any other site that collects personally identifiable information.</p>
          <p className='text-seco font-[900]'>Right to Deletion:</p>
          <p>Subject to certain exceptions set out below, upon receiving a verifiable request from you, we will delete your personal information from our records and direct any service providers to delete your personal information from their records.</p>
          <p>However, we may not be able to comply with requests to delete your personal information if it is necessary to:</p>

          <div className='ml-[5vw]'>
            <ul className='flex flex-col gap-[10px] list-disc '>
              <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>

              <li>
                Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity;
              </li>

              <li>
                Debug to identify and repair errors that impair existing intended functionality;
              </li>
              <li>
                Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;
              </li>

              <li>
                Comply with the California Electronic Communications Privacy Act;
              </li>

              <li>
                Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;
              </li>

              <li>
                Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;
              </li>

              <li>
                Comply with an existing legal obligation; or
              </li>

              <li>
                Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className='text-heads font-bold text-base uppercase'>Collecting Information of Minors:</p>
          <p>
            The FFrt. Srl, also known as Ox Trade Funding, a company located in Romania, <span className='text-seco font-[900]'>does not knowingly collect personally identifiable information from anyone under the age of 18</span>. You must be 18 years of age or older to sign up at Ox Trade Funding.
          </p>
        </div>

        <div>
          <p className='text-heads font-bold text-base uppercase'>E-mail Communications:</p>
          <p>From time to time, <span className='text-seco font-[900]'>The FFrt. Srl, also known as Ox Trade Funding, may contact you via email</span> for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.

            If you would like to stop receiving marketing or promotional communications via email from The FFrt. Srl, also known as Ox Trade Funding, you may opt out of such communications by responding to any of our emails with "Unsubscribe".</p>
        </div>

        <div>
          <p className='text-heads font-bold text-base uppercase'>External Data Storage Sites</p>
          <p>We may store <span className='text-seco font-[900]'>your data on servers provided by third-party hosting vendors</span> with whom we have contracted.</p>
        </div>

        <div>
          <p className='text-heads font-bold text-base uppercase'>
            Changes to this Statement
          </p>
          <p>Ox Trade Funding reserves the right to modify this Privacy Policy at any time. <span className='text-seco font-[900]'>We will inform you of significant changes in the way we handle personal information by sending a notice to the primary email address provided in your account, by placing a prominent notice on our website or updating any private information.</span> Your continued use of the website and/or services after such modifications implies your acknowledgment of the revised Privacy Policy and your agreement to comply with it.</p>
        </div>

        <div>
          <p className='text-heads font-bold text-base uppercase'>Contact Information</p>
          <p>Ox Trade Funding welcomes your inquiries and comments regarding this Statement of Privacy. If you believe that Ox Trade Funding has failed to adhere to this Statement, please contact Ox Trade Funding at <a href="" className='cursor-pointer text-blue-300 hover:underline'>support@oxtradefunding.com.</a></p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy