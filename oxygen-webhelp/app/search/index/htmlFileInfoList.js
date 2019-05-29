define(function () {
return ["glossary/g_C19_project.html@@@Nineteenth-Century Knowledge Project@@@A research project in the Digital Scholarship Center of Temple University Libraries exploring trends in the construction of knowledge by analyzing a data set of text from four historical editions of...","glossary/g_afr.html@@@ABBYY FineReader@@@A software program that scans image files and outputs text using OCR technology. AFR...","glossary/g_at_codes.html@@@at codes@@@A system for identifying footnotes in AFR output, using @@ for anchors and @@@ for footnote text...","glossary/g_bru.html@@@Bulk Rename Utility@@@A free software program for renaming large groups of files, created by TGRMN Software. BRU...","glossary/g_css.html@@@Cascading Style Sheets@@@A scripting language used to control the display of web page content. CSS CSS...","glossary/g_csv.html@@@CSV@@@Comma-Separate Values is a file format for storing date separate by commas...","glossary/g_digital_edition.html@@@digital edition@@@...","glossary/g_docx.html@@@DOCX@@@A file format for Microsoft Word documents that is par of OOXML, an XML-based schema for Office Open developed by Microsoft in 2006. It is a competing standard to that of Open Office XML. Word...","glossary/g_e_inventory.html@@@entry-inventory@@@...","glossary/g_eb.html@@@Encyclopedia Britannica@@@A multi-volume general reference source still publishing today. EB...","glossary/g_entry_file.html@@@entry file@@@A file containing a single Encyclopedia entry term and its text. Note: The Python script converts page files into entry files...","glossary/g_epub.html@@@EPUB@@@An e-book file format with the extension .epub . The term is short for electronic publication .&quot; ePub...","glossary/g_hive.html@@@HIVE@@@...","glossary/g_html.html@@@Hyper Text Markup Language@@@Hyper Text Markup Language is used for coding web pages. HTML HTML...","glossary/g_kp1.html@@@kp1@@@...","glossary/g_kp2.html@@@kp2@@@...","glossary/g_master_files.html@@@master files@@@...","glossary/g_ocr.html@@@optical character recognition@@@Optical Character Recognition, a method of identifying letter forms in images and recovering their textual data as text. OCR OCR...","glossary/g_ocr_project.html@@@OCR-Project@@@A collection of files used by ABBYY FineReader and stored as a single group. AFR Project...","glossary/g_oxygen.html@@@Oxygen XML Editor@@@A program for creating and editing XML files and running XSL scripts. Oxygen...","glossary/g_p_inventory.html@@@page-inventory@@@...","glossary/g_page_file.html@@@page file@@@A file containing a single page of text from the print edition . Note: A page file may contain multiple entries or part of a single entry...","glossary/g_pdf.html@@@Portable Document Format@@@Portable Document Format was invented by Adobe as a multi-platform file format that presents documents, with all text formatting and images, in a manner independent of hardware and operating systems...","glossary/g_print_edition.html@@@print edition@@@The physical volumes of the original Encyclopedia Britannica, or their volume and page numbers...","glossary/g_python.html@@@Python@@@...","glossary/g_regex.html@@@Regular Expression@@@A simple, widely-used language for find and replace searches that identifies patterns in textual data using Regular Expressions; a regex might say, for example, &quot;find every word that starts with a&apos...","glossary/g_repository.html@@@repository@@@Any collection of files, books, images, or any other material. Also called a &quot;repo.&quot; repo...","glossary/g_section.html@@@section@@@A chunk of up to 250 pages from a specified letter in the Encyclopedia. Sections are named with the entry letter and a two-digit number indicating their position in the sequence of sections, such as...","glossary/g_spreadsheet.html@@@spreadsheet@@@A file containing rows and columns of data that is opened by a spreadsheet program, such as Excel. XSLX...","glossary/g_tei.html@@@Text Encoding Initiative@@@The Text Encoding Initiative standards for encoding textual data in XML format. TEI TEI...","glossary/g_txt.html@@@text file@@@A kind of computer file that is structured as a sequence of lines of electronic text and using the file extension .txt . Text files can contain plain text but are not limited to that. TXT TXT...","glossary/g_xhtml.html@@@eXtensible hypertext markup language@@@A form of HTML that conforms to the XML standard. XHTML XHTML...","glossary/g_xml.html@@@eXtensible Markup Language@@@eXtensible Markup Language: a flexible language for encoding data, including text. XML XML...","glossary/g_xml_project.html@@@XML-project@@@A collection of files used by Oxygen XML Editor and stored as a single group. Oxygen Project...","glossary/g_xslt.html@@@eXtensible Stylesheet Language Transformation@@@eXtensible Stylesheet Language Transformation: a scripting language for converting XML documents into other formats. XSLT XSLT...","source/c.page_2_entry.html@@@Convert Page to Entry Files@@@Before page files can be converted to entry files, we need to do some housekeeping...","source/c_1_afr_project_folder.html@@@1-afr-project Folder@@@Container for OCR Project files for ABBYY FineReader...","source/c_2_page_docx_folder.html@@@2-page-docx Folder@@@Container for Word .docx page files created by ABBYY FineReader...","source/c_2_page_html_folder.html@@@2-page-html Folder@@@Container for HTML page files created by ABBYY FineReader...","source/c_3_page_tei_folder.html@@@3-page-tei Folder@@@Container for TEI page files...","source/c_4_entry_tei_folder.html@@@4-entry-tei Folder@@@Contains the TEI-encoded data after the page files are converted to entry files...","source/c_5_entry_md_folder.html@@@5-entry-md Folder@@@A collection of files containing metadata for each entry page...","source/c_6_master_tei_folder.html@@@6-master-tei Folder@@@Master files for digital editions are stored here...","source/c_archive_folder.html@@@Archive Folder@@@Used for long-term storage of image files...","source/c_archive_repo.html@@@Archive Repository@@@Used for long-term storage of image files...","source/c_author_initials.html@@@Author Initials@@@Always include author indicators at the end of articles...","source/c_catchwords.html@@@Catchwords@@@Leave out the extra word at the bottom of the page in eb03...","source/c_check-entry-terms.html@@@Check the Entry Terms List@@@Compare our list of recognized entry terms with the print pages...","source/c_code_folder.html@@@code Folder@@@The central repository for our programming routines and transformation scripts...","source/c_convert_docx2tei.html@@@Convert DOCX to TEI@@@Use Oxygen and XSLT to convert DOCX files to TEI...","source/c_convert_page_to_entry.html@@@Convert Page to Entry Files@@@Before page files can be converted to entry files, we need to do some housekeeping...","source/c_convert_pages_to_entries.html@@@Convert Pages to Entries@@@Use Python to convert an entire section of page files into entry files...","source/c_converting_docx_to_tei.html@@@Convert DOCX to TEI@@@Using Oxygen and XSLT to convert DOCX files to TEI...","source/c_converting_html_to_tei.html@@@Convert HTML to TEI@@@Using Oxygen and XSLT to convert HTML files to TEI...","source/c_create_an_image_collection.html@@@Create an Image Collection@@@How to organize images files for scanning...","source/c_data_organization.html@@@Organization@@@With hundreds of thousands of files, the Knowledge Project needs a clear means of organizing its data. We use specific naming conventions for all files and folders to order the large quantity of material...","source/c_digital_edition_folder.html@@@digital-editions Folder@@@Storage area for editions generated from the TEI master files...","source/c_draw_boxes.html@@@Draw Boxes@@@Manually creating text recognition boxes improves accuracy...","source/c_edition_section_system.html@@@Edition/Section System@@@File organization depends on two basic folder types...","source/c_editorial_standards.html@@@Editorial standards@@@The following editorial principles are employed in creating this digital edition...","source/c_entry_fdr.html@@@entry folder@@@Entries are the individual articles in the Encyclopedia...","source/c_folder_types.html@@@Folder Types@@@File organization depends on two basic folder types...","source/c_footnote_areas.html@@@Footnote Areas@@@Footnotes always output as the last areas on the page...","source/c_formulas.html@@@Formulas@@@Scanning simple and complex math and chemical formulas...","source/c_headers.html@@@Headers@@@How to treat two-column entry titles...","source/c_illustrations.html@@@Illustrations@@@When drawing boxes, leave out illustrations and their captions...","source/c_images_folder.html@@@Images Folder@@@The images folder contains page images from the archive folder organized for scanning...","source/c_information_folder.html@@@Information Folder@@@Contains general information related to the project...","source/c_introduction.html@@@Introduction@@@What is the Knowledge Project?...","source/c_kp1_repository.html@@@kp1 Repository@@@The folder structure of kp1...","source/c_kp2_repository.html@@@kp2 Repository@@@The folder structure of kp2...","source/c_marginal_notes__eb03.html@@@Marginal Notes@@@Marginal notes occur frequently in early editions as well as footnotes...","source/c_ocr.html@@@OCR@@@An introduction to AFR that explains the specific procedures we use to get the best quality text recognition of Encyclopedia page images...","source/c_ocr_folder.html@@@OCR Folder@@@Contains all files involed in creating the textual data from page images of the Encyclopedia Britannica...","source/c_ocr_for_eb03.html@@@OCR for eb03@@@Scanning eb03 requires special settings...","source/c_oxygen-xml-editor.html@@@XML@@@This introduction to Oxygen XML Editor shows you how to navigate the interface and perform standard procedures on the Encyclopedia files...","source/c_page_folder.html@@@page Folder@@@Pages are individual pages in the Encyclopedia...","source/c_page_recognition.html@@@Page Recognition@@@Excellent page recognition depends on preparing the page properly...","source/c_print_edition_folder.html@@@Print Edition Folders@@@Subdivisions of the print editions for digitization...","source/c_processing_entry_files.html@@@Entry Files@@@Procedures for converting single pages into Encyclopedia entries...","source/c_production_folder.html@@@Production Folder@@@Contains all files involed in creating the textual data from page images of the Encyclopedia Britannica...","source/c_proof-entry-terms.html@@@Proof the Entry Terms List@@@Compare our list of recognized entry terms with the print pages...","source/c_python_folder.html@@@Python Folder@@@Python script files...","source/c_records_folder.html@@@Records Folder@@@A collection of spreadsheets and other documents recording details of the production and analytical work...","source/c_reference_manual.html@@@Reference@@@Reference information on file/folder names, TEI-encoding standards, and unicode characters...","source/c_repositories.html@@@Repositories@@@The Knowledge Project uses three different repositories...","source/c_scanning_procedures.html@@@Scanning@@@An introduction to AFR that explains the specific procedures we use to get the best quality text recognition of Encyclopedia page images...","source/c_section_folder.html@@@Section Folders@@@The use and structure of section folders...","source/c_settings.html@@@Settings@@@Recommended settings for all options in ABBYY FineReader...","source/code_folder.html@@@Code Folder@@@The central repository for our programming routines and transformation scripts...","source/convert_pages_to_entries.html@@@Convert Pages to Entries@@@Use Python to convert an entire section of page files into entry files...","source/image_preprocessing.html@@@Image Preprocessing@@@Preprocess all images in a new OCR Project before drawing boxes...","source/import_a_scenario.html@@@Import a Scenario@@@Learn how to import an existing xsl transformation scenario into an OCR Project...","source/r.verse-drama.html@@@Verse and Drama@@@Encoding elements for verse and drama passages...","source/r_about.html@@@About@@@Staff and contributors...","source/r_afr-interface.html@@@AFR Interface@@@Learn about the main elements of the program interface...","source/r_editions_sections.html@@@Editions and Sections@@@Explains which print editions we use and how to refer to them and their subsections...","source/r_file_and_folder_names.html@@@Naming Conventions@@@Lists the naming conventions we use for editions, sections, folders, and files...","source/r_file_names.html@@@File and Folder Names@@@A comprehensive guide to file and folder naming for every stage of the Encyclopedia project...","source/r_image_sources.html@@@Image Sources@@@Bibliographic information on print editions and image repositories...","source/r_notes.html@@@Notes@@@Details method we use to code footnote text in TEI...","source/r_oxygen-interface.html@@@Oxygen Interface@@@An introduction to the main components of the Oxygen interface...","source/r_page_numbers.html@@@Page Numbers@@@Specifies encoding method for page numbers in TEI...","source/r_tei_style_manual.html@@@TEI Style Manual@@@All TEI encoding must follow these guidelines...","source/r_text_problems.html@@@Source Text Problems@@@Indicate where text in the print edition is missing, illegible, or apparently incorrect...","source/r_type_attributes.html@@@Typographical Attributes@@@Lists TEI encoding we use for typographical features, with their CSS equivalents...","source/r_unicode_characters.html@@@Unicode Characters@@@List of unicode characters and entities used frequently in the Encyclopedia and not on the standard US keyboard...","source/r_verse-drama.html@@@Verse and Drama@@@Encoding elements for verse and drama passages...","source/t_add_words_to_dictionary.html@@@Add Dictionary Words@@@Teach AFR how to spell...","source/t_areas_and_text_tab.html@@@Areas and Text Tab@@@Settings for the Areas and Text tab in the ABBYY FineReader Options window...","source/t_check_code.html@@@Check the HTML Code@@@How to check and correct coding problems in the page files...","source/t_check_footnote_coding_1.html@@@Check Footnote Coding 1@@@Use a simple search to check if you have the right number of note codes on all pages...","source/t_check_footnote_coding_2.html@@@Check Footnote Coding 2@@@Search for multiple footnotes in the same paragraph and separate them...","source/t_cleanup_afr_output.html@@@Cleanup AFR Output Filenames@@@Explains how to change auto-generated filenames created by AFR...","source/t_cleanup_html_output.html@@@Cleanup HTML Output@@@Explains how to change auto-generated filenames and delete special folders created by AFR...","source/t_code_footnotes.html@@@Code Footnotes@@@Using @ codes for footnotes...","source/t_copy_image_files.html@@@Copy and Paste the Image Files@@@Locate image files in the archive and move them to the production folder...","source/t_create_a_new_xml_project.html@@@Create an XML-Project@@@Using Oxygen XML Editor to organize files...","source/t_create_an_ocr_project.html@@@Create an OCR-Project@@@How to create and manage an OCR-Project...","source/t_create_an_ocr_project_folder.html@@@Create an OCR-Project Folder@@@How to create and manage the OCR-Project folder...","source/t_create_transformation_scenario.html@@@Create a Transformation Scenario@@@How to locate the appropriate XSLT file and create a new transformation scenario...","source/t_edit_tables.html@@@Editing tables@@@Table columns and rows can be adjusted before recognition...","source/t_entry_inventory.html@@@Entry-Inventory File@@@Document the file names of every entry in a section using the entry-inventory file...","source/t_format_settings_tab.html@@@Format Settings Tab@@@Settings for the Format Settings tab in the ABBYY FineReader Options window...","source/t_general_tab.html@@@General Tab@@@Settings for the General tab in the ABBYY FineReader Options window...","source/t_identify_the_print_pages.html@@@Identify the Print Pages@@@Use the print-pagination file to look up page numbers...","source/t_image_preprocessing.html@@@Image Preprocessing@@@Preprocess all images in a new OCR Project before drawing boxes...","source/t_image_processing_tab.html@@@Image Processing Tab@@@Settings for the Image Processing tab in the ABBYY FineReader Options window...","source/t_image_resolution.html@@@Set Image Resolution@@@Correct the image resolution on all pages of the OCR Project before drawing boxes...","source/t_import_a_scenario.html@@@Import a Scenario@@@Learn how to import an existing xsl transformation scenario into an OCR Project...","source/t_inventory_images.html@@@Inventory the Images@@@Finalize image selections and add filenames to the inventory...","source/t_languages_tab.html@@@Languages Tab@@@Settings for the Languages tab in the ABBYY FineReader Options window...","source/t_make_html_files_well_formed.html@@@Make the HTML Files Well-Formed@@@How to validate HTML files in Oxygen...","source/t_modify_areas.html@@@Modify Areas@@@Areas must be drawn in a basic box shape, but they can be altered to subtract or add to part of the box...","source/t_ocr_tab.html@@@OCR Tab@@@Settings for the OCR tab in the ABBYY FineReader Options window...","source/t_order_areas.html@@@Order Areas@@@How to order areas correctly for text output...","source/t_other_tab.html@@@Other Tab@@@Settings for the Other tab in the ABBYY FineReader Options window...","source/t_page_inventory.html@@@Page-Inventory File@@@We document the file names of every page in a section using the page-inventory file...","source/t_pages_withou-text.html@@@Pages without Text@@@When to include pages without text in the output...","source/t_partial_entries.html@@@Add Titles to Partial Entries@@@Prepare the first entry in the section for inclusion...","source/t_proofread.html@@@Proofread@@@How much additional proofreading is appropriate?...","source/t_review_inventory_notes.html@@@Review Inventory Comments@@@Correct resolvable issues noted in the comments...","source/t_save_and_output.html@@@Save and Output@@@How to output your OCR results...","source/t_special_cases.html@@@Special Cases@@@You will encounter a variety of situations that need to be brought to the attention of the person who converts page files to entry files. If you notice any of the following cases on a page, please add a note to the inventory file...","source/t_table_areas.html@@@Table Areas@@@Creating table areas improves recognition...","source/t_text_areas.html@@@Text Areas@@@How to draw text areas...","source/t_train_ocr.html@@@Train OCR@@@Advanced users can improve recognition with user patterns...","source/t_transform_docx2tei.html@@@Transform the DOCX Files to TEI@@@How to convert DOCX files to TEI in Oxygen...","source/t_transform_html_tei.html@@@Transform the HTML Files to TEI@@@How to convert HTML files to TEI in Oxygen...","source/t_validating_entry_files.html@@@Validate Entry Files@@@Use Oxygen to validate the entry files...","source/t_verification.html@@@Verification@@@Use AFR&apos;s built-in program to verify recognition accuracy on each page..."];
});