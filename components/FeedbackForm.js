import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
  <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3718858421/size=small/bgcol=ffffff/linkcol=0687f5/track=2846054672/transparent=true/" seamless><a href="https://heavenpierceher.bandcamp.com/album/ultrakill-imperfect-hatred">ULTRAKILL: IMPERFECT HATRED by Heaven Pierce Her</a></iframe>
  )
}
