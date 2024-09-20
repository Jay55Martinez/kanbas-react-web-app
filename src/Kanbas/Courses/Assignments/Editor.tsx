export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows={25} cols={50}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option value="1">Group 1</option>
                <option value="2">Group 2</option>
                <option value="3">Group 3</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade</label>
            </td>
            <td>
                <select id="wd-display-grade">
                    <option value="1">Percentage</option>
                    <option value="2">Complete/Incomplete</option>
                    <option value="3">Letter Grade</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <label htmlFor="wd-entry-option">Online Entry Option</label><br/>
                <input type="checkbox" name="entry-option-text" id="wd-entry-option"/>
                <label htmlFor="wd-entry-option">Text Entry</label><br/>

                <input type="checkbox" name="entry-option-web" id="wd-entry-option"/>
                <label htmlFor="wd-entry-option">Website URL</label><br/>

                <input type="checkbox" name="entry-option-rec" id="wd-entry-option"/>
                <label htmlFor="wd-entry-option">Media Recording</label><br/>

                <input type="checkbox" name="entry-option-annotation" id="wd-entry-option"/>
                <label htmlFor="wd-entry-option">Student Annotation</label><br/>

                <input type="checkbox" name="entry-option-file" id="wd-entry-option"/>
                <label htmlFor="wd-entry-option">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label htmlFor="wd-assign">Assign to</label>
                <br />
                <input id="wd-assign" value="Everyone" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input id="wd-due-date" type="date" value="2021-01-01" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label htmlFor="wd-available-date">Available From</label>
                <br />
                <input id="wd-available-date" type="date" value="2021-01-01" />
            </td>
            <td align="right" valign="top">
                <label htmlFor="wd-until-date">Until</label>
                <br />
                <input id="wd-until-date" type="date" value="2021-01-01" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td align="right" valign="top"></td>
            <td>
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </td>
          </tr>
        </table>
      </div>
    );
}