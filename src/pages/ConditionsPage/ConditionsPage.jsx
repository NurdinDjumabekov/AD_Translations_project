import React, { useEffect } from "react";
import styles from "./ConditionsPage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";

const ConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.conditionsPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            Main
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">Terms and Conditions</NavLink>
        </div>
        <h2>Terms and Conditions</h2>
        <p>
          The following Terms and Conditions constitute a legally binding
          agreement (“The Agreement”) between you (“Client”) and AD Translations
          Ltd Limited(“AD Translations”) regarding access to and use of the
          www.ADTranslations.com website (“website”) and its associated
          translation services (“Services”) rendered or to be rendered by AD
          Translations. By accessing or using the website or Services, you agree
          to be bound by these Terms and Conditions of Service. If you do not
          wish to be bound by these Terms and Conditions of Service, you should
          leave the website now.
        </p>
        <h3>For the purposes of this Agreement,</h3>
        <p>
          “Source Material(s)” shall mean any electronic or other files that the
          Client transmits to AD Translations using the website that are
          intended to be the subject of services hereunder. The final translated
          version of the Source Material(s) shall be referred to as
          “Deliverable” or “Deliverables” Each order or formal request for the
          provision of Services shall be referred to as an “Order”. en.AD
          Translations.com is an online translation ordering site. The charge
          for the translation is based on word-count, category of text,
          language(s) and service requested. The word-count, as determined by AD
          Translations, is final and non-negotiable. The word-count is clearly
          visible throughout the ordering process. Any changes to this
          word-count will be communicated to the Client for approval.
        </p>
        <p>
          All prices and rates quoted are subject to change without notice prior
          to formal acceptance of any Order. AD Translations reserves the right
          to charge for additional services requested after an Order has been
          accepted. It is the responsibility of the Client to select the
          appropriate service and category of text for the translation of the
          Source Material(s). AD Translations will not accept any responsibility
          if the service selected does not meet the specific requirements of the
          Client. The Client can request a translation by uploading and
          submitting Source Material(s) to the website or sending it by email.
          The translated files will remain accessible through the website for a
          period of at least six months after completion unless otherwise
          agreed. AD Translations will not be liable to correct any errors or
          omissions that were inherent in the original Source Material(s) and
          which may or may not affect the quality of the Deliverable. Source
          Material(s) will be virus checked upon receipt by AD Translations. AD
          Translations reserves the right to refuse to translate any Source
          Material(s) of an offensive nature, defamatory, obscene, in breach of
          any statutory or regulatory obligation, or is otherwise considered
          inappropriate by AD Translations, whose decision in all matters shall
          be binding and conclusive. The services can be utilized by selecting
          either Standard Account, User Gold Account or Corporate Account.
          Standard Accounts are for individuals and companies, and payment is
          due immediately on completion of each order by credit card or bank
          transfer and all service levels and languages are available. User Gold
          Accounts are for single users within companies or other legally
          incorporated bodies only. Users will be invoiced for all translations
          completed within a month at the end of that month and payment is due
          within 30 days from the Invoice date. Corporate Accounts are for use
          by multiple users within companies or other legally incorporated
          bodies only:- The first named person on the account is the authorized
          business user, who has authority to add/remove users to the account.
          Several users can be added to one Corporate Account, with the ability
          to grant/restrict access to the website. It is the responsibility of
          the Client to update, edit and remove users. AD Translations accepts
          no liability in relation to user access to the account. Payment is via
          bank transfer only. The Client will have the ability to set profiles
          for each user of the Corporate Account, determining each user’s level
          of access. AD Translations warrants that all translations will meet
          reasonable commercial standards for professional human translation
          (i.e. human translation by a bilingual translator with reasonable
          skill in translating the concepts and terminology of industry-specific
          text, proofread by a second translator). Times for expected receipt of
          the Deliverable are displayed at the time of order (Delivery Date). AD
          Translations will do everything possible to meet these deadlines but
          does not accept liability for any delay in delivery. AD Translations
          reserves the right to amend the delivery date and will make all
          reasonable efforts to contact the Client if there is any change in the
          Delivery Date. Time is not the essence of any Project, and AD
          Translations entire liability for late delivery of any single Project
          to the Client, whether in contract, negligence or otherwise, is
          limited to an amount equal to the order value of the project. The
          Client is responsible for advising AD Translations in writing in
          advance if the due date for delivery of any Project is critical in
          terms of any consequences to the Client if delivery were late. AD
          Translations reserves the right to decline any Project in such
          circumstances. The Client is also responsible for reviewing translated
          material to check for errors that may have safety critical
          implications or that would cause other significant losses for the
          Client. The Client should perform its own quality review in such
          circumstances and should insure itself against any liability arising
          from errors. AD Translations only duty and liability in the event of
          any errors in a translation is to correct such errors within a
          reasonable time. Payment is due on delivery, unless a User Gold
          Account or a Corporate Account has been established in which case
          payment is due 30 days from the date of invoice. Copyright in
          translations remains vested in AD Translations until payment for that
          translation is made in full. For Corporate Accounts, AD Translations
          will only accept Orders from valid Corporate Account users. Corporate
          Accounts will be invoiced at the end of each calendar month for all
          Orders completed in the month. Invoices will be raised in Euros or
          pounds sterling and payment is in Euros or Pounds sterling. The Client
          has 10 days from receipt of the final Deliverable to inform AD
          Translations or any errors or omissions contained in the translated
          work. AD Translations will make the necessary corrections free of
          charge and within a reasonable AD Translations. Client Warranties The
          Client represents and warrants that it owns or is licensee of the
          Source Material(s) and all components thereof, and that translation of
          the Source Material(s) and publication, distribution, sales or other
          use of the deliverable shall not infringe upon any copyright,
          trademark or patent, or other right of any third party. The Client
          represents and warrants that Source Material(s) submitted to the
          website is/are of good quality and free of errors or spelling
          mistakes. The Client warrants not to use any device, software or
          routine to interfere with the proper working of the website or which
          may have a contaminating or detrimental effect on the website. AD
          Translations makes no representations or warranties of any kind,
          except as set forth above. Without limiting the foregoing, the
          services are provided on an “as is” and “as available” basis and
          without any other warranties of any kind, express or implied,
          including the implied warranties of merchantability, fitness for a
          particular purpose, or non-infringement of proprietary rights. AD
          Translations shall not be liable for any incidental, special or
          consequential damages or loss of any nature whatsoever, nor for any
          claim against the Client by any other person or entity, arising from
          or relating to services rendered by AD Translations, regardless of the
          nature of the claim or the form of the cause of action, whether in
          contract or in tort, or otherwise, and even if AD Translations has
          been advised of the possibility of such damages by anything contained
          in related proposals and other documentation. AD Translations shall
          not be responsible for any loss or damage to, nor the return of, any
          Source Material(s). The maximum liability to the Client by AD
          Translations shall in all cases, other than those involving death or
          personal injury, be limited to the value of the Order. In the event
          that the Client breaches this Agreement, AD Translations shall have
          the right to terminate immediately, whereupon the Client shall pay the
          full purchase price provided hereunder for the services completed and
          for all work in progress. In the event that AD Translations breaches
          this Agreement, the Client shall have the right to terminate whereupon
          AD Translations shall return to the Client all Source Material(s) and
          data supplied by the Client together with all Deliverables that exist
          as of the date of termination. All right, title and interest in and to
          the Source Material(s) and, except as hereunder provided, the
          Deliverables, and any and all patent rights, copyright, know-how, and
          trade secrets therein are and remain the sole and exclusive property
          of the Client. Notwithstanding the above, the Client acknowledges that
          AD Translations is the sole and exclusive owner of all right, title,
          and interest in and to all: methodology, information, software, and
          databases used in translating the Source Material(s), and inventions,
          methodology, innovations, know-how, and databases developed by AD
          Translations in the course of translating the Source Material(s),
          including any and all patent rights, copyrights, know-how, and trade
          secrets therein. Provided that the Deliverables and copyright,
          know-how and trade secrets therein shall remain the property (but not
          the risk) of AD Translations until AD Translations shall have been
          paid in full for such Deliverables. The nature of the work performed
          and any information transmitted to AD Translations by the Client shall
          be confidential. AD Translations shall not without the prior consent
          of the Client, divulge or otherwise disclose such information to any
          person other than authorized employees or authorized subcontractors of
          AD Translations whose job performance requires such acts. The
          provisions of this paragraph shall not apply to the extent AD
          Translations is required by law to divulge such information or to the
          extent such information is or becomes a matter of public knowledge
          other than by disclosure by AD Translations. The Client shall
          indemnify, defend, and hold harmless AD Translations, its owners,
          directors, officers, employees, representatives, agents, successors
          and assigns from and against any and all losses, damages, costs and
          expenses, including reasonable legal fees, resulting from, arising out
          of or incidental to any suit, claim or demand based on (i) the
          performance of this Agreement by either party, (ii) the Client’s
          breach of the covenants, representations and warranties made by it
          herein, (iii) the manufacture, advertisement, promotion, sale or
          distribution of any items by the Client, (iv) any taxes and duties,
          levies, tariffs, or like fees that may be imposed by any government or
          collective authority upon manufacture, advertisement, promotion, use,
          import, licensing or distribution of items by the Client, or (v) any
          claim that any element of the Deliverable infringes any copyright,
          trademark, patent, or other proprietary right. All disclaimers,
          indemnities and exclusions in the Agreement shall survive termination
          for any reason. If any part of these Terms and Conditions is held to
          be unlawful, invalid or unenforceable, that part shall be deemed
          severed and the validity and enforceability of the remaining Terms and
          Conditions shall not be affected. AD Translations may modify these
          Terms and Conditions at any time. This Agreement is to be governed by
          and construed in accordance with English Law. Any disputes shall be
          subject to the exclusive jurisdiction of the English courts. By using
          this website, you agree to be bound by our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default ConditionsPage;
