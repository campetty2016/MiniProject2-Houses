<?xml version="1.0" encoding="UTF-8"?>

<!--

	Mini Project 2

	Author: Candace Petty
	Date: 3/24/16
	File Name: homes.xsl

-->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Global category Parameter -->
  <xsl:param name="category" select="'Ranch'"/>

  <!-- Root Template -->
  <xsl:template match="/">

    <html>

      <body>

        <!-- Count Variable n -->
        <xsl:variable name="Count">

          <xsl:value-of select="count(Houses/House[@Type=$category])"/>

        </xsl:variable>

        <!-- Heading -->
        <h2>Found <xsl:value-of select="$Count"/><xsl:text> </xsl:text> <xsl:value-of select="$category"/><xsl:text> </xsl:text>Style Houses Available for Sale</h2>

      <!-- Homes Container -->
      <div id="Homes">

        <!-- Loops through each Instance of House Elements that Match the Category -->
        <xsl:for-each select="Houses/House[@Type=$category]">

          <!-- Sorts by Price and SqFt -->
          <xsl:sort select="Price" order="descending"/>

          <xsl:sort select="SqFt" order="ascending"/>

          <!-- Houses -->
          <div id="Houses">

            <table width="300px">

              <tr>

                <td>

                  <!-- Thumbnail Images for Houses -->
                  <xsl:variable name="image" select="Thumbnail"/>
                  <img id="HouseImages" src="images/{$image}" alt="Thumbnail"/>

                  <!-- House Information Table Below Thumbnails -->
                  <table>

                    <tr>

                      <td width="100px">Square Feet:</td>
                      <td width="200px"><xsl:value-of select='format-number(SqFt, "# ft")'/></td>

                    </tr>

                    <tr>

                      <td>Address:</td>
                      <td width="200px">

                        <!--Address Information Table -->
                        <table>

                          <tr>
                            <td><xsl:value-of select="Address/Street"/></td>
                          </tr>

                          <tr>
                            <td><xsl:value-of select="Address/City"/>,<xsl:text> </xsl:text><xsl:value-of select="Address/State"/><xsl:text> </xsl:text><xsl:value-of select="Address/ZIP"/>

                            </td>
                          </tr>

                        </table>

                      </td>

                    </tr>

                    <tr>

                      <td>Price:</td>
                      <td><xsl:value-of select='format-number(Price, "$###,###")'/></td>

                    </tr>

                    <tr>

                      <td>Floors:</td>
                      <td><xsl:value-of select="Floors"/></td>

                    </tr>

                  </table>

                </td>

              </tr>

            </table>

          </div>

        </xsl:for-each>

      </div>

    </body>

  </html>

</xsl:template>

</xsl:stylesheet>
