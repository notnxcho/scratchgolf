import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

const Legal = () => {
  const { tab } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('privacy')

  // Set active tab based on URL parameter
  useEffect(() => {
    if (tab && ['privacy', 'terms', 'liability'].includes(tab)) {
      setActiveTab(tab)
    } else {
      // Default to privacy if no valid tab
      navigate('/legal/privacy', { replace: true })
    }
  }, [tab, navigate])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    navigate(`/legal/${newTab}`)
  }

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'liability', label: 'Liability Waiver' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy</h2>
            <p className="text-gray-600 mb-6">Last Updated: August 7, 2025</p>
            
            <p>This Privacy Policy ("Policy") describes how Scratch Lab ("we," "us," or "our") collects, uses, shares, and protects your personal information. This Policy applies to all interactions with us, including your use of our website, our online booking systems, and your presence at our physical facilities. By using our services, you expressly agree to the practices described in this Policy. If you do not agree, you may not use our services.</p>
            
            <h3>1. Information We Collect</h3>
            <p>We collect various types of personal information from you to provide and continuously improve our services. The information we collect falls into the following categories:</p>
            
            <p><strong>Identifiers:</strong> This includes information you provide when you create an account, make a booking, or sign up for a membership. Examples are your full name, email address, postal address, telephone number, and unique identifiers we may assign to you, such as a customer or membership ID. We may also collect your date of birth to verify eligibility for services or to confirm you are of legal age.</p>
            
            <p><strong>Payment Information:</strong> We collect information necessary to process your transactions securely. This includes credit or debit card numbers, expiration dates, security codes, and billing addresses. We do not store full credit card numbers on our servers; this data is securely handled by our third-party payment processors. We also maintain a detailed history of your transactions with us, including purchases of simulator bookings, lessons, merchandise, and beverages.</p>
            
            <p><strong>Commercial Information:</strong> We track your purchasing and consuming histories to better understand your preferences and improve our offerings. This includes records of services you have purchased (e.g., specific lessons or training packages), products you have considered (e.g., items you've added to a cart), and your general purchasing tendencies. This information helps us to tailor future promotions and product recommendations to you.</p>
            
            <p><strong>Internet or Other Electronic Network Activity Information:</strong> When you interact with our website or online booking systems, we automatically collect certain information. This includes your browsing history, search history, and information about your interaction with our website, such as pages viewed and time spent. We use technologies like cookies, IP addresses, web beacons, and other device identifiers to collect this data. This information helps us analyze website traffic, diagnose server issues, and personalize your online experience.</p>
            
            <p><strong>Audio, Electronic, Visual, or Similar Information:</strong> For the safety and security of all patrons and staff, and for liability purposes, our physical facilities are under continuous video surveillance. This includes CCTV recordings of our common areas, simulators, and entrance/exit points. These recordings are used to prevent and investigate theft, monitor for property damage, and to document incidents of injury or other liabilities. Access to this information is strictly limited and is not used for purposes of individual tracking or performance analysis.</p>
            
            <p><strong>Professional or Employment-Related Information:</strong> If you are booking a corporate event or have a corporate membership, we may collect information you provide about your employer or professional title to facilitate those services.</p>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the personal information we collect for the following business purposes, all of which are directly related to the provision and improvement of our services:</p>
            
            <p><strong>To Provide Services and Fulfill Orders:</strong> We use your information to process your simulator, lesson, and training bookings, manage your membership account, and fulfill your orders for merchandise and beverages. This includes sending you booking confirmations, receipts, and order updates.</p>
            
            <p><strong>To Communicate With You:</strong> We use your contact information to communicate with you about your account, bookings, or inquiries. With your consent, we may also send you marketing communications about new products, services, or special promotions. You can opt out of these promotional communications at any time.</p>
            
            <p><strong>For Security and Safety:</strong> The CCTV recordings and other security-related data we collect are used to ensure a safe environment for everyone at our facilities. We use this information to protect our property from theft and damage, to investigate incidents and claims of injury or misconduct, and to provide evidence for law enforcement as needed.</p>
            
            <p><strong>To Improve and Personalize Our Services:</strong> We analyze your usage patterns and commercial information to better understand the needs and preferences of our patrons. This allows us to make data-driven decisions to enhance our offerings, optimize the user experience on our website, and tailor our marketing efforts to better serve your interests.</p>
            
            <p><strong>To Process Payments and Prevent Fraud:</strong> We use your payment and commercial information to securely process your transactions and to screen for potentially fraudulent activity.</p>
            
            <p><strong>For Legal and Compliance Purposes:</strong> We may use your personal information to comply with legal obligations, enforce our Terms of Service, and defend ourselves against legal claims. This includes, but is not limited to, responding to subpoenas, warrants, or other legal processes from government or law enforcement agencies.</p>
            
            <h3>3. How We Share Your Information</h3>
            <p>We do not sell your personal information for monetary consideration. However, under the California Consumer Privacy Act (CCPA/CPRA), certain forms of data sharing may be considered a "sale" or "sharing" for cross-context behavioral advertising. We may share your personal information with the following categories of third parties for business purposes:</p>
            
            <p><strong>Service Providers:</strong> We engage trusted third-party companies that perform essential services on our behalf. This includes payment processors (e.g., for secure transaction handling), website hosting providers, analytics partners, and marketing and advertising partners. These service providers are contractually obligated to use your personal information only for the purpose of providing the services we request and are not permitted to use it for their own purposes.</p>
            
            <p><strong>Legal and Regulatory Authorities:</strong> We may disclose your personal information to government agencies, law enforcement, or courts when we have a good-faith belief that such disclosure is necessary to comply with a legal obligation, to protect our rights or property, or to ensure the safety of our patrons or the public.</p>
            
            <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the new owner as part of that transaction. You will be notified of any such event and any changes to the privacy policy.</p>
            
            <p><strong>Anonymized and Aggregated Data:</strong> We may share de-identified or aggregated data with third parties for business and marketing purposes. This data cannot be used to identify you personally and is not considered personal information under this Policy.</p>
            
            <h3>4. Your Rights Under California Law (CCPA/CPRA)</h3>
            <p>If you are a California resident, you have the following rights regarding your personal information, subject to certain exceptions:</p>
            
            <p><strong>Right to Know:</strong> You have the right to request that we disclose to you the categories and specific pieces of personal information we have collected about you, the sources from which we collected it, the business purpose for collecting it, and the categories of third parties with whom we have shared it.</p>
            
            <p><strong>Right to Delete:</strong> You have the right to request the deletion of your personal information that we have collected. Please note that we may not be able to delete all of your information if it is necessary to complete a transaction, detect security incidents, or comply with a legal obligation.</p>
            
            <p><strong>Right to Correct:</strong> You have the right to request the correction of any inaccurate personal information that we maintain about you.</p>
            
            <p><strong>Right to Opt-Out of Sale/Sharing:</strong> While we do not sell your data for monetary value, we may share certain information with third-party advertising partners for cross-context behavioral advertising. You have the right to opt-out of this "sale" or "sharing" of your personal information.</p>
            
            <p><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA/CPRA rights.</p>
            
            <h3>5. How to Exercise Your Rights</h3>
            <p>To exercise your rights, please submit a verifiable request to us using one of the following methods:</p>
            <ul>
              <li>Email: privacy@scratchlabgolf.com</li>
              <li>Toll-Free Phone Number: +1 (551) 556-4469</li>
            </ul>
            
            <p>To verify your identity and protect your personal information, we may require you to provide additional information, such as your full name, email address, postal address, or recent transaction history. We will respond to all verifiable requests in accordance with applicable law within the required timeframe (typically 45 days).</p>
            
            <p><strong>Do Not Sell or Share My Personal Information:</strong> To exercise your right to opt-out of the "sale" or "sharing" of your personal information, please click <a href="mailto:privacy@scratchlabgolf.com?subject=Do Not Sell or Share My Personal Information" className="text-[#12AF9A] hover:underline">here</a> or contact us using the methods above.</p>
            
            <p><strong>Authorized Agents:</strong> If you are an authorized agent submitting a request on behalf of a California resident, you must provide a copy of your signed permission from the consumer and verify your own identity. We may also require the consumer to directly verify their identity and/or confirm that they gave you permission to submit the request.</p>
            
            <h3>6. Data Security and Retention</h3>
            <p>We are committed to protecting your personal information. We maintain reasonable technical, physical, and administrative safeguards to protect your data from unauthorized access, use, or disclosure. However, no data transmission over the internet or method of electronic storage is 100% secure.</p>
            
            <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. This period is determined by the nature of the data and the purpose for which it was collected.</p>
            
            <h3>7. Children's Privacy</h3>
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take immediate steps to remove that information from our servers in compliance with the Children's Online Privacy Protection Act (COPPA).</p>
            
            <h3>8. Changes to This Privacy Policy</h3>
            <p>We reserve the right to amend this Policy at our discretion at any time. When we make changes, we will post the updated Policy on our website and update the "Last Updated" date at the top of the document. For material changes, we will provide more prominent notice, such as an email notification or a banner on our website. Your continued use of our services after such changes constitutes your acceptance of the new Policy.</p>
          </div>
        )
      
      case 'terms':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service</h2>
            <p className="text-gray-600 mb-6">Last Updated: August 7, 2025</p>
            
            <p><strong>IMPORTANT:</strong> By accessing and using the services, website, or facilities of Scratch Lab ("Scratch Lab," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). This is a legally binding contract. If you do not agree to these Terms, you may not use our services or access our facilities. Please read this document carefully and in its entirety before proceeding with any transaction or use of our premises, as it contains a mandatory arbitration clause and a class-action waiver that affects your legal rights.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>These Terms constitute a legally binding agreement between you, the individual user, and Scratch Lab, and they supersede all prior communications, representations, and agreements, whether electronic, oral, or written. These Terms govern your use of all Scratch Lab services, including but not limited to, online and in-person simulator bookings, golf lessons, golf performance training, memberships, purchasable merchandise, and any beverages or other products sold on-site. Your access to and continued use of our website, utilization of our online booking systems, and/or your physical presence on our premises, whether as a paying customer or an invited guest, constitutes your express, irrevocable, and unconditional acceptance of these Terms. Scratch Lab reserves the absolute and sole right to amend, modify, or update these Terms at any time without prior notification. It is your exclusive and non-delegable responsibility to review these Terms periodically for any and all changes. Your continued engagement with our services after the posting of any modifications signifies your unconditional acceptance of the revised Terms.</p>
            
            <h3>2. Use of Services and Facility Rules</h3>
            
            <p><strong>a. Eligibility, Supervision, and Age Representation:</strong> To book services online, to execute a membership agreement, or to make any purchases on your own behalf, you must be at least 18 years of age. Minors are permitted to use the Scratch Lab facility and services only when they are accompanied and under the direct, constant, and active supervision of a legal guardian who is also a party to these Terms. By entering our facilities, you represent and warrant that you are of legal age to enter into this contract or that you are the responsible legal guardian of any minor in your party. You further agree and acknowledge that any misrepresentation of your or a minor's age is a direct and material violation of these Terms and that Scratch Lab is not and shall not be liable for any damages, injuries, or losses arising from such misrepresentation. The legal guardian, by bringing the minor to the facility, assumes full and complete responsibility for the minor's conduct, safety, and any and all liabilities, including but not limited to financial liability for any damage the minor may cause to Scratch Lab's property or to third parties. This provision is material to the agreement and any breach may result in immediate expulsion from the facility and forfeiture of any and all fees paid. You agree that usage of the facilities are limited to two hours per day and are restricted to you and one guest.</p>
            
            <p><strong>b. Assumption of Risk and Physical Condition:</strong> You acknowledge and understand that participation in golf, use of golf simulators, engaging in performance training, and taking lessons are all inherently physical activities that carry a significant risk of serious injury, property damage, or even death. These risks include, but are not limited to: slips, trips, and falls on our premises; impacts from errant or projectile golf balls, clubs, or other equipment; collisions with walls, other patrons, or facility furnishings; muscle strains, sprains, or tears; fractures; and other injuries resulting from improper technique, poor judgment, or equipment failure. By using our facilities and services, you voluntarily and knowingly assume all such risks, both known and unknown, and waive any claims against Scratch Lab related to them. This waiver and assumption of risk does not, however, apply to claims based on our gross negligence, willful injury to you or your property, or fraud, as provided by California Civil Code §1668. You represent that you are in adequate physical condition to participate in these activities and are not aware of any medical conditions, injuries, or physical limitations that would make your participation inadvisable or unsafe.</p>
            
            <p><strong>c. Code of Conduct and Property Damage:</strong> You and your guests agree to adhere strictly to all Scratch Lab rules and regulations, including maintaining a safe, respectful, and appropriate environment for all patrons and staff. This includes, but is not limited to: following all instructions from Scratch Lab staff; using equipment and simulators only as intended; refraining from any behavior that may be disruptive or dangerous, such as horseplay, running, or swinging a club outside of a designated bay; and using profane or offensive language. You will be held financially responsible for any and all damage that you or your guests cause to Scratch Lab's property, including but not limited to simulators, screens, projectors, clubs, furnishings, and other equipment. Scratch Lab reserves the right to immediately remove any individual from the premises for any violation of this code of conduct, without refund or recourse.</p>
            
            <p><strong>d. Alcoholic Beverages, Outside Food and Drink:</strong> Alcoholic beverages may be purchased on-site and consumed responsibly by individuals who present a valid government-issued ID proving they are of legal drinking age. We maintain a zero-tolerance policy for outside alcoholic beverages. Scratch Lab staff reserves the right to refuse service to any individual at our sole discretion, particularly to those who appear intoxicated or are behaving in an unsafe or disruptive manner. We also reserve the right to remove any individual from the premises who becomes disruptive due to alcohol consumption. A limited amount of outside food and non-alcoholic beverages may be permitted at staff's discretion.</p>
            
            <p><strong>e. Access Code Confidentiality and Revenue Forfeiture:</strong> In-house and partner coaches acknowledge that any access code provided by Scratch Lab ("Access Code") is personal, confidential, and intended solely for Coaches' individual use. Coaches shall not share, disclose, transfer, or otherwise make the Access Code available to any third party. In the event that Scratch Lab determines, in its sole discretion, that Coach has shared or permitted unauthorized use of the Access Code, Coach employment or partnership will be terminated and shall immediately forfeit to Scratch Lab any and all revenues, compensation, or other amounts generated, directly or indirectly, through such unauthorized use, and Scratch Lab shall have the unrestricted right to recover and retain such amounts.</p>
            
            <h3>3. Bookings, Cancellations, and Refunds</h3>
            
            <p><strong>a. Online Bookings and Payment:</strong> All bookings for services, including simulators, lessons, and training, must be made through our official website. A valid credit card or other approved payment method is required to secure all reservations. You are responsible for ensuring the accuracy of all information provided during the booking process. By providing your payment information, you authorize Scratch Lab to charge for the booked services, as well as any applicable cancellation or no-show fees as described in these Terms. All bookings are subject to availability and confirmation.</p>
            
            <p><strong>b. Strict Cancellation and No-Show Policy:</strong> You may cancel a booking up to 24 hours in advance of the scheduled time to receive a full refund to your original payment method. Cancellations made within the 24-hour window will be charged the full amount of the booking. This policy is necessary because a late cancellation or no-show prevents Scratch Lab from re-booking the slot and results in lost revenue. If you fail to show up for a booking without any prior cancellation, you will be charged the full amount as a no-show fee. This policy is strictly enforced and no exceptions will be made.</p>
            
            <p><strong>c. Scratch Lab's Right to Cancel:</strong> Scratch Lab reserves the unconditional right to cancel any booking for any reason, including but not limited to: equipment malfunction, unforeseen facility closures, natural disasters, power outages, safety concerns, or staffing issues. In the event of a cancellation by Scratch Lab, you will be offered a full refund to your original payment method or a credit for a future booking at your discretion. This refund or credit is the sole and exclusive remedy available to you for any such cancellation, and Scratch Lab is not liable for any other costs or damages you may incur as a result of the cancellation.</p>
            
            <h3>4. Memberships</h3>
            
            <p><strong>a. Membership Agreement and Fees:</strong> All memberships are subject to a separate, detailed written agreement that outlines the specific terms, benefits, fees, and cancellation policies. This Membership Agreement is an extension of these Terms of Service. In the event of a conflict between these Terms and your Membership Agreement, the Membership Agreement shall prevail. All membership fees, including initiation fees and monthly dues, are non-refundable, non-transferable, and you are responsible for timely payment regardless of your usage of the facility.</p>
            
            <p><strong>b. Membership Termination:</strong> Scratch Lab reserves the right to immediately terminate your membership and revoke your access to our facilities for any reason, including but not limited to: a violation of these Terms, failure to make timely payments, fraudulent activity, unsafe conduct, or any action deemed detrimental to the safety and well-being of other patrons or staff. In the event of a termination due to your violation of these Terms, no refunds for any prepaid membership fees will be provided.</p>
            
            <h3>5. Limitation of Liability and Indemnification</h3>
            
            <p><strong>a. Waiver of Claims:</strong> To the maximum extent permitted by law, you hereby knowingly and voluntarily waive, release, and discharge any and all claims, demands, damages, and causes of action against Scratch Lab, its owners, employees, contractors, agents, and affiliates, for any and all injuries, damages, or losses, whether foreseeable or not, arising from or related to your use of our services or facilities. This waiver and limitation of liability is intended to be as broad and inclusive as is permitted by California law, and it does not apply to claims for gross negligence, willful injury to you or your property, or fraud as provided by California Civil Code §1668.</p>
            
            <p><strong>b. Limitation of Liability:</strong> In no event shall Scratch Lab, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to personal injury, property damage, lost profits, or lost opportunities, arising from or in any way related to your use of our services or facilities. This limitation applies to all damages, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not Scratch Lab was advised of the possibility of such damage. Our total aggregate liability to you for any and all claims shall not exceed the amount you paid to us in the one (1) month preceding the event giving rise to the claim.</p>
            
            <p><strong>c. Indemnification:</strong> You agree to indemnify, defend, and hold harmless Scratch Lab, its owners, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising from or related to your violation of these Terms, your unsafe conduct, or the actions of your guests while on our premises. This indemnification obligation will survive the termination of your use of our services.</p>
            
            <h3>6. Intellectual Property</h3>
            <p>All content on our website and in our facilities, including but not limited to text, graphics, logos, images, software, trade dress, branding, and the compilation thereof, is the exclusive property of Scratch Lab and is protected by intellectual property laws, including copyright and trademark law. You are expressly prohibited from using, reproducing, modifying, distributing, or displaying any of this content for any commercial purpose without our express written permission. You may not use the Scratch Lab name, logo, or any related trademarks without our prior written consent.</p>
            
            <h3>7. Dispute Resolution and Governing Law</h3>
            
            <p><strong>a. Mandatory Arbitration and Waiver of Jury Trial:</strong> Any and all disputes, claims, or controversies arising out of or relating to these Terms or your use of our services shall be resolved exclusively by final and binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in the county where Scratch Lab's principal place of business is located in California. By agreeing to these Terms, you and Scratch Lab are each waiving the right to a trial by jury or to participate in a class-action lawsuit. The arbitrator's decision will be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>
            
            <p><strong>b. No Class Actions:</strong> You agree that any arbitration or legal proceeding shall be conducted solely on an individual basis. You explicitly waive any right to participate in any class-action lawsuit or class-wide arbitration against Scratch Lab. This waiver is a material provision of these Terms.</p>
            
            <p><strong>c. Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located in the county where Scratch Lab's principal place of business is located for any and all disputes that are not subject to arbitration.</p>
            
            <h3>8. General Provisions</h3>
            <p>If any provision of these Terms is found by a court of competent jurisdiction to be unenforceable or invalid, the remaining provisions shall remain in full force and effect. These Terms, along with any separate Membership Agreement, constitute the entire agreement between you and Scratch Lab and supersede all prior agreements and understandings, whether electronic, oral, or written. The failure of Scratch Lab to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. The headings in these Terms are for convenience only and have no legal or contractual effect. You may not assign your rights or obligations under these Terms without our prior written consent.</p>
          </div>
        )
      
      case 'liability':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Waiver of Liability and Release</h2>
            <p className="text-gray-600 mb-6">Last Updated: August 7, 2025</p>
            
            <p><strong>IMPORTANT: THIS IS A LEGAL DOCUMENT THAT AFFECTS YOUR AND YOUR GUEST'S LEGAL RIGHTS. PLEASE READ CAREFULLY. BY USING Scratch Lab FACILITIES, YOU ARE GIVING UP YOUR RIGHT TO SUE FOR ORDINARY NEGLIGENCE AND ARE AGREEING TO INDEMNIFY THE COMPANY. YOUR ENTRY INTO AND USE OF THE FACILITIES CONSTITUTES YOUR BINDING AND IRREVOCABLE AGREEMENT TO ALL THE TERMS BELOW.</strong></p>
            
            <p>In consideration for being permitted to use the facilities, equipment, and services of Scratch Lab ("Scratch Lab," "we," "us," or "our"), the undersigned ("Participant," "you," or "your") hereby agrees to this comprehensive Waiver of Liability and Release. This document serves as a binding contract and applies to all activities and services provided by Scratch Lab.</p>
            
            <h3>1. Voluntary Assumption of Risk</h3>
            <p>You hereby acknowledge, understand, and agree that the use of our golf simulators, equipment, and facilities, including participation in golf lessons, performance training, or any other related activities, involves inherent and unavoidable risks of serious personal injury, property damage, or even death. You understand that these risks are an intrinsic part of the activity and cannot be entirely eliminated, even with due care and supervision. These risks are both known and unknown, foreseeable and unforeseeable.</p>
            
            <p>These risks include, but are not limited to:</p>
            <ul>
              <li>Being struck by a golf ball, a golf club, or other equipment, which may be errant or unintentionally propelled.</li>
              <li>Injuries resulting from the physical act of swinging a golf club, including but not limited to muscle strains, sprains, tears, fractures, or other injuries to the back, neck, shoulders, and joints.</li>
              <li>Slips, trips, and falls on our premises due to a variety of factors, including wet floors, uneven surfaces, or collisions with objects or other people.</li>
              <li>Collisions with other participants, walls, or facility equipment, which may occur during a swing or while moving about the premises.</li>
              <li>Equipment malfunctions, failures, or defects, which may cause personal injury or property damage.</li>
              <li>Injuries resulting from improper use of equipment, improper technique, or poor judgment, whether by you or by other participants.</li>
              <li>The risks associated with the presence of other participants and their activities, which may be unpredictable.</li>
            </ul>
            
            <p>You knowingly and voluntarily accept and assume full responsibility for all such risks, whether caused by your own actions or the actions of others. You understand that this voluntary assumption of risk means you are accepting the responsibility for any and all resulting injuries, damages, or losses.</p>
            
            <h3>2. Waiver and Release of Liability</h3>
            <p>To the fullest extent permitted by California law, you hereby waive, release, and forever discharge Scratch Lab, and its owners, employees, agents, contractors, and affiliates (collectively, the "Released Parties") from any and all claims, demands, damages, actions, or causes of action of any kind, whether in law or equity, arising from or related to your use of our facilities or services.</p>
            
            <p>This waiver includes, but is not limited to, claims based on ordinary negligence on the part of the Released Parties. You understand that ordinary negligence refers to the failure to exercise the degree of care that a reasonably prudent person would exercise under the same circumstances. This waiver does not, however, apply to claims for gross negligence, willful injury, or fraud, as provided by California Civil Code §1668. You acknowledge that this distinction is a material part of this agreement.</p>
            
            <p>This release applies to any and all liability, including without limitation, liability for personal injury, property damage, wrongful death, or any other loss, damage, or expense, regardless of whether such claims are currently known, unknown, anticipated, or unanticipated.</p>
            
            <h3>3. Indemnification</h3>
            <p>You agree to indemnify, defend, and hold harmless Scratch Lab, and all other Released Parties, from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising from or related to your conduct or the actions of your guests while on our premises. This indemnification obligation extends to and includes any claims brought by third parties who are injured or whose property is damaged as a result of your negligence or intentional actions. You understand that this means if a third party sues Scratch Lab because of your actions, you agree to cover Scratch Lab's legal defense costs and any resulting judgments or settlements.</p>
            
            <h3>4. Governing Law and Jurisdiction</h3>
            <p>This Waiver is governed by the laws of the State of California, without regard to its conflict of law principles. You agree that any legal action arising from or related to this Waiver or your use of our facilities will be brought exclusively in the state or federal courts located in the county where Scratch Lab's principal place of business is located. You hereby waive any objection to personal jurisdiction or venue in such courts.</p>
            
            <h3>5. Acknowledgement</h3>
            <p>Your use of Scratch Lab facilities, services, and equipment constitutes your certification that you have read this entire document, you understand its content, and you voluntarily agree to its terms. You acknowledge that this Waiver is a legally binding contract and that you are of legal age (18 or older) or are the legal guardian of any minor in your party and have the legal authority to enter into this agreement on their behalf. You also certify that you are not under the influence of any drugs or alcohol and are physically able to participate in the activities.</p>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO />
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto px-4 py-16 mt-[40px] md:mt-[80px]">
        {/* Header */}
        <SectionHeader 
          title="Legal Information" 
          description="Important legal documents and policies for Scratch Lab Golf" 
        />

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg space-x-1 md:space-x-2 p-1 shadow-lg border border-gray-200">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === tabItem.id
                    ? 'bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Legal
